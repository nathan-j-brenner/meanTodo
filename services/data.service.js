(function(){

'use strict';

const angular = require('angular');

angular.module('app').factory('DataService', DataService);

DataService.$inject = ['$http']

function DataService(){

	var service = {
		getTodos: getTodos,
		postTodo: postTodo,
		putTodo: putTodo,
		deleteTodo: deleteTodo
	};

	return service;

	const getTodos = () => {
		return $http.get('./data.mock.json')
					.then(getTodosCompleted)
					.catch(getTodosFailed);
		function getTodosCompleted(response){
			return response;
		}
		function getTodosFailed(error){
			console.log(error.message);
		}
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
})();