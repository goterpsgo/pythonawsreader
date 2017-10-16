(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResultsService', Service);

    function Service($http, $q) {
        var factory = {
              _get_results: get_results
            , _post_result: post_result
        };

        return factory;

        function get_results() {
            var deferred = $q.defer();
            $http.get('/resultsdata')
                .then(
                    function(response) {
                        deferred.resolve(response.data);
                    }
                    , function(data, status, headers, config) {
                        // deferred.resolve(response.data.response);
                        deferred.resolve(JSON.parse('{"response": {"method": "GET", "result": "error", "status": "' + status + '"}}'));
                    }
                );
            return deferred.promise;
        }

        function post_result(form_data) {
            var deferred = $q.defer();
            var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
            }

            $http.post('/resultsdata', form_data, config)
                .then(function(form_data, status, headers, config) {
                    deferred.resolve(form_data);
                }
                , function(data, status, headers, config) {
                    // deferred.resolve(response.data.response);
                    deferred.resolve(JSON.parse('{"response": {"method": "POST", "result": "error", "status": "' + status + '"}}'));
                });
            return deferred.promise;
        }
    }
})();
