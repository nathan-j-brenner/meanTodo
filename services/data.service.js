(function(){

'use strict';

const angular = require('angular');

function dataService($http, $q){

	var service = {
		getTodos: getTodos,
		postTodo: postTodo,
		putTodo: putTodo,
		deleteTodo: deleteTodo
	};

	return service;

	const getTodos = () => {
		// $http.get('./data.mock.json');
		return [
			{
				"task": "todo 1"
			},
			{
				"task": "todo 2"
			},
			{
				"task": "todo 3"
			},
			{
				"task": "todo 4"
			},
			{
				"task": "todo 5"
			}
		]
		// return $http.get('./data.mock.json')
		// 			.then(getTodosCompleted)
		// 			.catch(getTodosFailed);
		// function getTodosCompleted(response){
		// 	return response;
		// }
		// function getTodosFailed(error){
		// 	console.log(error.message);
		// }
	}

	const postTodo = (task) => {
		// todo
	}

	const putTodo = (task) => {
		// todo
	}

	const deleteTodo = (task) => {
		// todo
	}
}

dataService.$inject = ['$http', '$q'];
angular.module('app').service('dataService', dataService);

})();