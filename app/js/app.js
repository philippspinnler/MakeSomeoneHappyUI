'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers',
        'myApp.factories'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user', {templateUrl: 'partials/user.html', controller: 'UserController'});
        $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginController'});
        $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'RegisterController'});
        $routeProvider.otherwise({redirectTo: '/login'});
    }])

    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }]);
