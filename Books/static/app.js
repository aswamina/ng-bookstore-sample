(function() {
    var app = angular.module('bookStore', []);

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });
})();
