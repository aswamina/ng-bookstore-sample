(function() {
    angular.module('bookStore').controller('StoreCtrl', ['$scope','$http', function($scope, $http) {

        $http.get('http://127.0.0.1:5000/getBooks').success(function(data) {
            $scope.books = data;
        });
    }]);
})();