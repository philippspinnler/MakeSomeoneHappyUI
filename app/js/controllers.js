'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('UserController', ['$scope', '$http', 'auth', '$location', 'restUser', function ($scope, $http, auth, $location, restUser) {
        $scope.isLoggedIn = auth.isLoggedIn();
        $scope.logout = function() {
            auth.logout();
            $location.path('/login');
        }

        restUser.get(null,
            function(users) {
                $scope.users = users.users;
                console.log(users.users);
            },
            function(error) {
                console.log(error.data.message);
            });
    }])

    .controller('LoginController', ['$scope', 'auth', '$location', '$window', function ($scope, auth, $location, $window) {
        $scope.login = function() {
            console.log('login clicked');
            if ($scope.loginForm.$valid) {
                console.log('loginForm valid')
                var promise = auth.login($scope.user);
                promise.then(success, error);
            } else {
                console.log('loginForm not valid')
                $scope.loginForm.submitted = true;
            }
        }

        var success = function(response) {
            console.log(response);
            var expires_at = Math.round(+new Date()/1000) + response.data.expires_in;
            console.log(expires_at);
            $window.sessionStorage.access_token = response.data.access_token;
            $window.sessionStorage.refresh_token = response.data.refresh_token;
            $window.sessionStorage.expires_at = expires_at;
            $location.path('/user');
        };

        var error = function(response) {
            $scope.wrongCredentials = true;
        }
    }])

    .controller('RegisterController', ['$scope', function($scope) {

    }]);
