(function(){
	'use strict';

function TodoCtrl(dataFactory){
	// change to ctrl
	var vm = this;

	// todo functions
	vm.addTask = addTask;
	vm.completeTask = completeTask;
	vm.editTask = editTask;
	vm.getTodos = getTodos;
	vm.updateTask = updateTask;

	vm.getTodos();
	
	function addTask (task) {
		var taskDoc = {
			"task": task,
		};
		dataFactory.postTodo(taskDoc);
		vm.newTask = '';
		return getTodos();
	}

	function completeTask (task) {
		dataFactory.deleteTodo(task);
		return getTodos();
	}

	function editTask (task) {
		task.edit= true;
	}

	function updateTask(task){
		task.edit = false;
		dataFactory.putTodo(task);
	}

	function getTodos(){
		dataFactory.getTodos((response)=>{
			var tasks = response.data.todos;
			vm.tasks = tasks;
		});
	}

}

TodoCtrl.$inject = ['dataFactory'];

angular.module('app').controller('TodoCtrl', TodoCtrl);

})();