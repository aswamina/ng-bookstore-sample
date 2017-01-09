(function() {
    angular.module('bookStore').controller('StoreCtrl', ['$scope','$http', '$rootScope', function($scope, $http, $rootScope) {

        $http.get('http://127.0.0.1:5000/getBooks').success(function(data) {
            $scope.books = data;
        });

        $scope.expandBookPanel = function() {
            $rootScope.$broadcast("bookPanel:expand");
        };

        $scope.collapseBookPanel = function() {
            $rootScope.$broadcast("bookPanel:collapse");
        };
    }]);
})();