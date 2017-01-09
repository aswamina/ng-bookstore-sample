(function() {
    angular.module('bookStore').controller('bookPanelCtrl', ['$scope', function($scope) {
        console.log("in panel controller");
        //$scope.tab = 0;
        $scope.setBookPanelStatus = function(status) {
            $scope.openBookPanel = {
                state: status
            };
            console.log("status area, scope=", $scope);
        };

        $scope.selectTab = function(setTab) {
            $scope.tab = setTab;
            $scope.setBookPanelStatus(true);
            console.log("tab = ", $scope.tab);
        };

        $scope.isTabSelected = function(checkTab) {
            return $scope.tab === checkTab;
        };


        $scope.$on("bookPanel:expand", function(event) {
            console.log("Received event to expand book panel");
            $scope.setBookPanelStatus(true);
        });

        $scope.$on("bookPanel:collapse", function(event) {
            console.log("Received event to collapse book panel");
            $scope.setBookPanelStatus(false);
            $scope.selectTab(0);
        });

        $scope.setBookPanelStatus(false);
    }]);
})();