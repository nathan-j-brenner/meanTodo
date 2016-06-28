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
		var queue = [];
		var id = task._id;

		var request = $http.put(`/api/todos/${id}`, task).then((result)=>{
			task = result.data.task;
			return task;
		});
		queue.push(request);
		return $q.all(queue).then((results)=>{
			console.log('I have updated a todo');
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