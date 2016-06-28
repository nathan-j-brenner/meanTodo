(function(){
	'use strict';

// angular.module('app').controller('TodoCtrl', TodoCtlr);

function TodoCtlr($http, dataFactory){
	// change to ctrl
	var vm = this;

	vm.completedTasks=[];

	// todo functions
	vm.addTask = addTask;
	vm.completeTask = completeTask;
	vm.editTask = editTask;
	vm.getTodos = getTodos;

	vm.getTodos();
	
	function addTask (task) {
		var taskDoc = {
			"task": task
		};
		dataFactory.postTodo(taskDoc);
		vm.newTask = '';
		return getTodos();
	}

	function completeTask (task) {
		vm.completedTasks.push(task);
		var taskIndex = vm.tasks.indexOf(task);
		vm.tasks.splice(taskIndex, 1);
	}

	function editTask (task) {
		vm.newTask = task.task;
		var taskIndex = vm.tasks.indexOf(task);
		vm.tasks.splice(taskIndex, 1);
	}

	function getTodos(){
		dataFactory.getTodos((response)=>{
			var tasks = response.data.todos;
			vm.tasks = tasks;
		});
	}

}

TodoCtlr.$inject = ['$http', 'dataFactory'];

angular.module('app').controller('TodoCtrl', TodoCtlr);

})();