(function() {
    angular.module('bookStore').directive('bookCarousel', function () {
        return {
            restrict: 'E',
            templateUrl: 'static/bookCarousel/bookCarousel.html'
        };
    });
})();