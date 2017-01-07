(function() {
    angular.module('bookStore').controller('bookPanelCtrl', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        }

        this.isTabSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });
})();