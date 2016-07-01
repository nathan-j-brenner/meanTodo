'use strict';

function dataService($http, $q, $log){

	var service = {
		deleteTodo: deleteTodo,
		getTodos: getTodos,
		postTodo: postTodo,
		putTodo: putTodo
	};

	return service;

	function deleteTodo(task){
		var id = task._id;
		if(!id){
			return $q.resolve();
		}
		return $http.delete(`/api/todos/${id}`).then(()=>{
			console.log("Todo deleted");
		});
	}
	
	function getTodos(){
		return $http.get('/api/todos')
					.then(getTodosComplete)
					.catch(getTodosFailed);
		function getTodosComplete(response) {
			return response.data;
		}
		function getTodosFailed(){
			return $log.error('Failed request to get todos from database');
		}
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

}

module.exports = dataService;