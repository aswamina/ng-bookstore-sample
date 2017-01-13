(function() {
    angular.module('bookStore').directive('bookPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'static/bookPanel/bookPanel.html',
            controller: 'bookPanelCtrl',
            link: function(scope, element, attrs) {

                element.on('click', function(event) {
                    $("#carousel-of-books").carousel(scope.selectedBookIndex);
                    $("#carousel-of-books").carousel('pause');
                });

            }
        };
    });
})();