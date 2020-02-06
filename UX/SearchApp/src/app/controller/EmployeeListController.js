(function () {
    'use strict';
    angular.module('searchApp').controller('employeeListController', ['$scope','employeeService', employeeListController]);
    function employeeListController($scope, employeeService) {
            var vm = this;
            $scope.searchType = 'searchByName';
            employeeService.getData().then(function (data) {
                $scope.employees = data;
            });
        }
    })();