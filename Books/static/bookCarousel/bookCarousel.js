(function() {
    angular.module('bookStore').directive('bookCarousel', function () {
        return {
            restrict: 'E',
            templateUrl: 'static/bookCarousel/bookCarousel.html',
            link : function(scope, element, attrs) {
                //Add event listener for 'slide' event
                element.on('slide.bs.carousel', function(event) {

                    var active = $(event.target).find('.carousel-inner > .item.active');
                    var from = active.index();
                    var next = $(event.relatedTarget);
                    var to = next.index();
                    var direction = event.direction;

                    scope.selectedBookIndex = to;
                    scope.selectedBook = scope.books[to];
                    console.log("selectedBook", scope.selectedBook.name);
                });
/*
                $("#carousel-of-books").on('click', function(event) {
                    scope.expandBookPanel();
                });
*/
                $("#carousel-of-books").on('mouseleave', function(event) {
                    //scope.collapseBookPanel();
                    $("#carousel-of-books").carousel('cycle');
                });
/*
                $(".carousel-indicators").on('click', function(event) {
                    scope.collapseBookPanel();
                    scope.setTab(0);
                    console.log("collapsing book panel");
                });
*/
            }
        };
    });
})();