(function() {
    angular.module('bookStore').controller('StoreCtrl', ['$scope','$http', '$rootScope', function($scope, $http, $rootScope) {

        $http.get('http://127.0.0.1:5000/getBooks').success(function(data) {
            $scope.books = data;
        });


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