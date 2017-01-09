(function() {
    angular.module('bookStore').controller('bookPanelCtrl', ['$scope', function($scope) {
        console.log("in panel controller");
        $scope.tab = 0;


        $scope.selectTab = function(setTab) {
            $scope.tab = setTab;
            console.log("tab = ", $scope.tab);
        };

        $scope.isTabSelected = function(checkTab) {
            return $scope.tab === checkTab;
        };
/*
        $scope.$on("bookPanel:expand", function(event) {
            console.log("HERE expanding BookPanel");
            $scope.selectTab(1);
        });

        $scope.$on("bookPanel:collapse", function(event) {
            console.log("GOAT collapsing book panel");
            $scope.selectTab(0);
        });
*/
    }]);
})();