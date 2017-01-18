(function() {
    angular.module('bookStore').directive('bookReview', function () {
        return {
            restrict: 'E',
            templateUrl: 'static/bookReviews/bookReview.html',
            controller: 'bookReviewCtrl'
        };
    });
})();