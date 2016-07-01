
'use strict';

function TodoCtrl(dataService, $log){
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
		task.edit = true;
	}

	function getTodos(){
		return dataService.getTodos().then( data => vm.tasks = data.todos );
	}

	function updateTask(task){
		task.edit = false;
		dataService.putTodo(task);
	}

}

module.exports = TodoCtrl;