(function() {
    angular.module('bookStore').controller('bookPanelCtrl', ['$scope', function($scope) {
        console.log("in panel controller");
        $scope.tab = 0;
        $scope.activatePanel = false;

        $scope.selectTab = function(setTab) {
            $scope.tab = setTab;
            console.log("tab = ", $scope.tab);
        };

        $scope.isTabSelected = function(checkTab) {
            return $scope.tab === checkTab;
        };
    }]);
})();