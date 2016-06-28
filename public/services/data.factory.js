(function(){

'use strict';

// const angular = require('angular');

function dataFactory($http, $q){

	var service = {
		getTodos: getTodos,
		postTodo: postTodo,
		putTodo: putTodo,
	};

	return service;
	
	function getTodos(cb){
		return $http.get('/api/todos').then(cb);
	}

	function postTodo(task){
		return $http.post('/api/todos', task);
	}

	function putTodo(task){
		var id = task._id;
		return $http.put(`/api/todos/${todo._id}`, todo).then(result=>{
			todo = result.data.todo;
			return todo;
		});
	}

	function deleteTodo(task){
		// var id = task._id;
		// return $http.delete
	}
}

dataFactory.$inject = ['$http', '$q'];
angular.module('app').service('dataFactory', dataFactory);

})();