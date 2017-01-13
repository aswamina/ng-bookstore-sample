(function() {
    angular.module('bookStore').directive('bookCarousel', function () {
        return {
            restrict: 'E',
            templateUrl: 'static/bookCarousel/bookCarousel.html',
            controller: 'StoreCtrl',
            link : function(scope, element, attrs) {
                //Add event listener for 'slide' event
                var getSelectedBookIndex = function(event) {

                    var active = $(event.target).find('.carousel-inner > .item.active');
                    var from = active.index();
                    var next = $(event.relatedTarget);
                    var to = next.index();
                    var direction = event.direction;

                    return to;

                }

                element.on('slide.bs.carousel', function(event) {
                    var bookIndex = getSelectedBookIndex(event);
                    scope.updateSelectedBook(bookIndex);
                });

                $("#carousel-of-books").on('click', function(event) {
                    scope.expandBookPanel();
                });

                $("#carousel-of-books").on('mouseleave', function(event) {
                    //scope.collapseBookPanel();
                    $("#carousel-of-books").carousel('cycle');
                });
            }
        };
    });
})();