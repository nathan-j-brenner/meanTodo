'use strict';

var angular = require('angular')
var uirouter = require('angular-ui-router');

angular.module('app', [uirouter]).config(config);

function config ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('todo', {
		url: '/',
		templateUrl: 'todo/todo.html',
		controller: 'TodoCtrl',
		controllerAs: 'vm'
	});
}

// webpack
require('./services')
require('./todo')