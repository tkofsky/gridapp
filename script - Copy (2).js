var app = angular.module('main', ['ngTable']).
controller('DemoCtrl', function($scope, $filter, ngTableParams) {
    var data = [{name: "Moroni", age: 50,city:"New york"},
        {name: "Tiancum", age: 43,city:"New york"},
        {name: "Jacob", age: 27,city:"Boston"},
        {name: "Nephi", age: 29,city:"Boston"},
        {name: "Enos", age: 34,city:"New york"},
        {name: "Tiancum", age: 43,city:"New york"},
        {name: "Jacob", age: 27,city:"Boston"},
        {name: "Nephi", age: 29,city:"New york"},
        {name: "Enos", age: 34,city:"London"},
        {name: "Tiancum", age: 43,city:"London"},
        {name: "Jacob", age: 27,city:"New york"},
        {name: "Nephi", age: 29,city:"Rome"},
        {name: "Enos", age: 34,city:"New york"},
        {name: "Tiancum", age: 43,city:"Rome"},
        {name: "Jacob", age: 27,city:"Paris"},
        {name: "Nephi", age: 29,city:"Montreal"},
        {name: "Enos", age: 34,city:"Montreal"}];

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            name: ''       // initial filter
        },
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')(data, params.filter()) :
                    data;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    data;

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });





});