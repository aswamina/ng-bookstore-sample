(function() {
    angular.module('bookStore').controller('StoreCtrl', ['$scope','$http', '$rootScope', 'BookService', function($scope, $http, $rootScope, BookService) {
        $scope.ready = false;

        var onBooksComplete = function (data) {
            $scope.books = data;
            $scope.ready = true;
            $scope.selectedBook = $scope.books[0];
        };

        var onError = function (reason) {
            $scope.error = 'Could not fetch the books data.';
        };

        BookService.getBooks().then(onBooksComplete, onError);

        $scope.expandBookPanel = function(event) {
            console.log("sent event to expand BookPanel");
            $rootScope.$broadcast("bookPanel:expand");
        };

        $scope.collapseBookPanel = function(event) {
            console.log("sent event to collapse book panel");
            $rootScope.$broadcast("bookPanel:collapse");
        };
    }]);
})();