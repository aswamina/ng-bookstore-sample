(function() {
    angular.module('bookStore').controller('bookReviewCtrl', ['$scope', function($scope) {
        console.log("in review controller");

        $scope.review = {};

        $scope.addReview = function(product) {
            $scope.reviews.push($scope.review);
            $scope.review = {};
        }
    }]);
})();