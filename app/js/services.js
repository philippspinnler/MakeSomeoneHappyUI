'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

    .value('version', '0.1')

    .service('auth', function ($http, $window) {
        this.login = function (user) {
            console.log('auth service called')
            return $http.get('http://localhost:8080/oauth/v2/token' +
                    '?client_id=1_1iaiq0gmn78kw48ggkw4ccoksg0ckcw48scw40gwos848okww0' +
                    '&client_secret=1fr4o4dnk8sg88k0ccks080gogw0cg8g8kkcgoc8gkkc0wcw84' +
                    '&grant_type=password' +
                    '&username=' + user.email +
                    '&password=' + user.password);
        }

        this.isLoggedIn = function() {
            return ($window.sessionStorage.access_token) ? true : false;
        }

        this.logout = function() {
            $window.sessionStorage.removeItem('access_token');
            $window.sessionStorage.removeItem('refresh_token');
            $window.sessionStorage.removeItem('expires_at');
        }
    });
