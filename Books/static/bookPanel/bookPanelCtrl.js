(function() {
    angular.module('bookStore').controller('bookPanelCtrl', ['$scope', function($scope) {
        console.log("in panel controller");
        var tab = 0;

        $scope.setBookPanelStatus = function(status) {
            $scope.openBookPanel = {
                state: status
            };
        };

        $scope.selectTab = function(setTab) {
            tab = setTab;
            $scope.setBookPanelStatus(true);
        };

        $scope.isTabSelected = function(checkTab) {
            return tab === checkTab;
        };

        $scope.clearTab = function() {
            tab = 0;
            $scope.setBookPanelStatus(false);
        }

        $scope.$on("bookPanel:expand", function(event) {
            $scope.selectTab(1);
        });

        $scope.$on("bookPanel:collapse", function(event) {
            $scope.clearTab();
        });

        $scope.setBookPanelStatus(false);
    }]);
})();