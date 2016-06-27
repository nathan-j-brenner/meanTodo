(function(){
	'use strict';

// const angular = require('angular');
// const ngAnimate= require('angular-animate');
// const uiRouter = require('angular-ui-router');

angular.module('app', ['ui.router', 'ngAnimate', 'ui.bootstrap']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('todo', {
		url: '/',
		templateUrl: 'todo/todo.html',
		controller: 'TodoCtrl as vm'
	});
});

// require('./todo/Todo.controller.js');

})();