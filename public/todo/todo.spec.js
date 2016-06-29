describe('TodoCtrl', ()=>{

	var TodoCtrl;

	describe('A suite', ()=>{
		it('contains spec with an expectation', ()=>{
			expect(true).toBe(true);
		})
	})

	// beforeEach(module('app'));

	// beforeEach(inject(($controller, dataFactory)=>{
	// 	scope = {};
	// 	mock_dataFactory = dataFactory;
	// 	spyOn(mock_dataFactory, 'deleteTodo').and.callThrough();
	// 	spyOn(mock_dataFactory, 'getTodos').and.callThrough();
	// 	spyOn(mock_dataFactory, 'postTodo').and.callThrough();
	// 	spyOn(mock_dataFactory, 'putTodo').and.callThrough();
	// 	TodoCtrl = $controller('TodoCtrl', {
	// 		dataFactory : mock_dataFactory
	// 	});
	// }));

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject(($controller, dataFactory)=>{
		scope = {};
		mock_dataFactory = dataFactory;
		spyOn(mock_dataFactory, 'deleteTodo').and.callThrough();
		spyOn(mock_dataFactory, 'getTodos').and.callThrough();
		spyOn(mock_dataFactory, 'postTodo').and.callThrough();
		spyOn(mock_dataFactory, 'putTodo').and.callThrough();
		TodoCtrl = $controller('TodoCtrl', {
			dataFactory : mock_dataFactory
		});
	}))
});


	// describe('initial state of TodoCtrl', ()=>{
	// 	it('should have tasks defined as an empty array', ()=>{
	// 		expect(TodoCtrl).toBeDefined();
	// 		expect(TodoCtrl.tasks).toBeDefined();
	// 		expect(TodoCtrl.tasks).toEqual(jasmine.arrayContaining([]));
	// 	});
	// 	it('should have completedTasks defined as an empty array', ()=>{
	// 		expect(TodoCtrl.completedTasks).toBeDefined();
	// 		expect(TodoCtrl.completedTasks).toEqual(jasmine.arrayContaining([]))
	// 	});
	// });

	// describe('addTask', ()=>{
	// 	it('adds a task to vm.tasks', ()=>{
	// 		var newTask = 'This is a new task';
	// 		TodoCtrl.addTask(newTask);
	// 		expect(TodoCtrl.tasks).toEqual(jasmine.arrayContaining([{'task': newTask}]))
	// 		expect(TodoCtrl.newTask).toEqual('');
	// 	});
	// 	it('throws an error if you try adding a task that already exists', ()=>{
	// 		// todo
	// 	});
	// });

	// describe('completeTask', ()=>{
	// 	it('removes a task from vm.tasks and adds it to the completedTasks', ()=>{
	// 		var completedTask = {'task': 'This is a completed task'};
	// 		TodoCtrl.tasks = [completedTask]
	// 		TodoCtrl.completeTask(completedTask);
	// 		expect(TodoCtrl.tasks).toEqual(jasmine.arrayContaining([]));
	// 		expect(TodoCtrl.completedTasks).toEqual(jasmine.arrayContaining([completedTask]))
	// 	});
	// });

	// describe('editTask', ()=>{
	// 	it('moves the task from vm.tasks to vm.task', ()=>{
	// 		var editTask = {'task': 'This is a task to be edited'};
	// 		TodoCtrl.tasks = [editTask];
	// 		var editTaskIndex = TodoCtrl.tasks.indexOf(editTask);
	// 		expect(editTaskIndex).toEqual(0);
	// 		TodoCtrl.editTask(editTask);
	// 		expect(TodoCtrl.newTask).toEqual(editTask.task);
	// 		expect(TodoCtrl.tasks).toEqual(jasmine.arrayContaining([]));
	// 	});
	// });
// });