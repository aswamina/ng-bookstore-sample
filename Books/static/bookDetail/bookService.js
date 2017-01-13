(function () {

    angular.module('bookStore').factory('BookService', function($http) {

        var getBooks = function () {
            return $http.get('/getBooks').then(function (response) {
                return response.data;
            });
        };

        return {
            getBooks: getBooks
        };
    });

}());