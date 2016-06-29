(function(){
	'use strict';

function TodoCtrl(dataService){
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
		dataService.postTodo(taskDoc);
		vm.newTask = '';
		return getTodos();
	}

	function completeTask (task) {
		dataService.deleteTodo(task);
		return getTodos();
	}

	function editTask (task) {
		task.edit= true;
	}

	function updateTask(task){
		task.edit = false;
		dataService.putTodo(task);
	}

	function getTodos(){
		dataService.getTodos((response)=>{
			var tasks = response.data.todos;
			vm.tasks = tasks;
		});
	}

}

TodoCtrl.$inject = ['dataService'];

angular.module('app').controller('TodoCtrl', TodoCtrl);

})();