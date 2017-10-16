(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('ResultsController', Controller);

    function Controller($scope, ResultsService) {

        var vm = this;
        vm.this_form = {};
        vm.results = [];

        initController();

        function initController() {
            get_results();
        };

        vm.post_results = function(_form) {
            console.log('Running post_results(): ');
            console.log(_form);
            // ResultsService._post_result()
            //     .then(
            //         function(results) {
            //             console.log('Posted results');
            //         }
            //     )
        }

        function get_results() {
            ResultsService._get_results()
                .then(
                    function(results) {
                        console.log(results);
                    }
                );
        }
    }
})();
(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('ResultsController', Controller);

    function Controller($scope, ResultsService) {

        var vm = this;
        $scope.this_form = {};
        $scope.results = [];

        initController();

        function initController() {
            get_results();
        };

        $scope.post_results = function() {
            ResultsService._post_result($scope.this_form)
                .then(
                    function(results) {
                        console.log('Posted results');
                        console.log(results.data);
                        $scope.results = results.data;
                    }
                )
        }

        function get_results() {
            ResultsService._get_results()
                .then(
                    function(results) {
                        console.log(results);
                    }
                );
        }
    }
})();
