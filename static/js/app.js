(function() {
	'use strict';

	angular
		.module('app', ['ui.router'])
		.config(config)
		.run(run);

	function config($stateProvider) {
		console.log('Config...');

        $stateProvider
            .state('results', {
				url: '/results',
				views : {
					'_main' : {
						templateUrl: 'html/results.view.html',
						controller: 'ResultsController'
					}
				}
            })
	}

	function run() {
		console.log('Running...');
	}

})();
