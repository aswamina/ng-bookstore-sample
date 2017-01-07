(function() {
    angular.module('bookStore').directive('bookPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'static/bookPanel/bookPanel.html'
        };
    });
})();