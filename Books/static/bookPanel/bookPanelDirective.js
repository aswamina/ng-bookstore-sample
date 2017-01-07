(function() {
    angular.module('bookStore').directive('bookPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'static/bookPanel/bookPanel.html'
            // CREATE A LINK FUNCTION HERE THAT IMPLEMENTS THE FOLLOWING CODE
            // $("#myCarousel").pause()
        };
    });
})();