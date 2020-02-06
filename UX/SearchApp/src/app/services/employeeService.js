(function () {
    'use strict';
    angular.module('searchApp')
        .service('employeeService', ['$q', '$http', employeeService]);

    function employeeService($q, $http) {
        return {
            getData: function () {
                var deferred = $q.defer();
                var reqData = {};
                $http({
                    method: 'GET',
                    url: 'http://localhost/SearchAPI/api/EmployeeList',
                    data: reqData,
                    headers: { 'Content-Type': 'application/json' }
                }).success(function (data) {
                    deferred.resolve(data);
                    }).error(function (error) {
                        deferred.reject('Remote server not reachable !');
                    })
                return deferred.promise;
            },
        };


    }

})();