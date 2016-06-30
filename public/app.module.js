(function(){
	'use strict';

angular.module('app', ['ui.router']).config(config);

function config ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('todo', {
		url: '/',
		templateUrl: 'todo/todo.html',
		controller: 'TodoCtrl',
		controllerAs: 'vm'
	});
}

})();