(function(){
	'use strict';

function TodoCtrl(dataService, $log){
	// change to ctrl
	var vm = this;

	// todo functions
	vm.addTask = addTask;
	vm.completeTask = completeTask;
	vm.editTask = editTask;
	vm.getTodos = getTodos;
	vm.updateTask = updateTask;

	activate();

	function activate() {
		return getTodos().then(() => $log.info('Activated Todo view'));
	}
	
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
		return dataService.getTodos().then( data => vm.tasks = data.todos );
	}

}

TodoCtrl.$inject = ['dataService', '$log'];

angular.module('app').controller('TodoCtrl', TodoCtrl);

})();