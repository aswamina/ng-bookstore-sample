(function() {
    angular.module('bookStore').controller('bookPanelCtrl', ['$scope', function($scope) {
        console.log("in panel controller");
        //$scope.tab = 0;
        $scope.setBookPanelStatus = function(status) {
            $scope.openBookPanel = {
                state: status
            };
        };

        $scope.selectTab = function(setTab) {
            $scope.tab = setTab;
            $scope.setBookPanelStatus(true);
        };

        $scope.isTabSelected = function(checkTab) {
            return $scope.tab === checkTab;
        };


        $scope.$on("bookPanel:expand", function(event) {
            $scope.setBookPanelStatus(true);
        });

        $scope.$on("bookPanel:collapse", function(event) {
            $scope.setBookPanelStatus(false);
            $scope.selectTab(0);
        });

        $scope.setBookPanelStatus(false);
    }]);
})();