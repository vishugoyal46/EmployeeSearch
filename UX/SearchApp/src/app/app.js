(function () {
    'use strict';
    
    angular.element(document).ready(function () {
        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get('$http');
        angular.module('searchApp');
        angular.bootstrap(document, ['searchApp']);
    });

    angular.module('searchApp', ['ui.router']).config(['$provide', '$httpProvider', '$stateProvider', '$urlRouterProvider',
        function ($provide, $httpProvider, $stateProvider, $urlRouterProvider) {
            debugger;
            $stateProvider
                .state('employees', {
                    url: '/employees',
                    templateUrl: 'app/view/employeeList.html',
                    controller: 'employeeListController',
                    controllerAs: 'vm'
                });
            $urlRouterProvider.otherwise('/employees');
        }])
        //.run(['$rootScope', '$state', '$location',
        //    function ($rootScope, $state, $location) {
        //        var rmaObject = $location.search();

        //        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        //            $state.go('home')
        //        });

        //    }]);
})();
