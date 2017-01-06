(function() {
    angular.module('bookStore').controller('StoreCtrl', ['$scope','$http', function($scope, $http) {

        $http.get('http://127.0.0.1:5000/getBooks').success(function(data) {
            $scope.books = data;
        });

        $('#carousel-of-books').on('slide.bs.carousel', function (event) {
            var active = $(event.target).find('.carousel-inner > .item.active');
            var from = active.index();
            var next = $(event.relatedTarget);
            var to = next.index();
            var direction = event.direction;

            $scope.selectedBook = $scope.books[to].name;
        });
    }]);
})();
