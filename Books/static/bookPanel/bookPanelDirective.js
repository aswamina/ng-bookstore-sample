(function() {
    angular.module('bookStore').directive('bookPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'static/bookPanel/bookPanel.html',
            link: function(scope, element, attrs) {
                // CREATE A LINK FUNCTION HERE THAT IMPLEMENTS THE FOLLOWING CODE
                // $("#myCarousel").pause()
                element.on('click', function() {
                    $("#carousel-of-books").carousel(scope.selectedBookIndex);
                    $("#carousel-of-books").carousel('pause');
                    scope.activateBookPanel = true;
                    console.log("paneldirective: activateBookPanel", scope.activateBookPanel);
                });
            }
        };
    });
})();