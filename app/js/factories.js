angular.module('myApp.factories', ['ngResource'])
    .factory('authInterceptor', function($window, $q, $location) {
        return {
            request: function(config) {
                /*
                // does not work because of browsers preflight OPTIONS request
                config.headers = config.headers || {};
                if ($window.sessionStorage.access_token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.access_token;
                }*/

                // workaround because of browsers preflight request
                if ($window.sessionStorage.access_token) {
                    if(config.url.indexOf('?') === -1) {
                        config.url = config.url + '?access_token=' + $window.sessionStorage.access_token;
                    } else {
                        config.url = config.url + '&access_token=' + $window.sessionStorage.access_token;
                    }
                }

                console.log(config);

                return config;
            },

            responseError: function(response) {
                if (response.status === 401) {
                    $location.path('/login');
                }

                return $q.reject(response);
            }
        }
    })

    .factory('restUser', function ($resource) {
        var url = 'http://localhost:8080/api/users';

        var restUser = $resource(url);

        return restUser;
    });