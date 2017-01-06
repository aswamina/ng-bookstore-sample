(function() {
    var app = angular.module('bookStore', []);

    // This section obtains the list of books from a REST API
    app.controller('StoreController', ['$scope','$http', function($scope, $http) {
        var store = this ;
        store.products = [];

        $http.get('http://127.0.0.1:5000/getBooks').success(function(data) {
            store.products = data;
        });

        $('#carousel-of-products').on('slide.bs.carousel', function (event) {
            var active = $(event.target).find('.carousel-inner > .item.active');
            var from = active.index();
            var next = $(event.relatedTarget);
            var to = next.index();
            var direction = event.direction;

            $scope.selectedProduct = store.products[to];
            store.selectedProduct = $scope.selectedProduct.name;
        });
    }]);

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
