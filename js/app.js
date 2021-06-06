var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.patterns = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/patterns.json';

        $http.get(file)
        .then(function(response) {
            $scope.patterns = response.data.patterns;
        });
    };

    $scope.init();
});