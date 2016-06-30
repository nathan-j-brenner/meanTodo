xdescribe('TodoCtrl', ()=>{

	var TodoCtrl;

	describe('A suite', ()=>{
		it('contains spec with an expectation', ()=>{
			expect(true).toBe(true);
		})
	})

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject(($controller, dataService)=>{
		scope = {};
		mock_dataService = dataService;
		spyOn(mock_dataService, 'deleteTodo').and.callThrough();
		spyOn(mock_dataService, 'getTodos').and.callThrough();
		spyOn(mock_dataService, 'postTodo').and.callThrough();
		spyOn(mock_dataService, 'putTodo').and.callThrough();
		TodoCtrl = $controller('TodoCtrl', {
			dataService : mock_dataService
		});
	}));

	it('addTask sends the taks to the database', ()=>{
		// todo
	})

	it('completeTask removes the task from the database', ()=>{
		// todo
	})

	it('editTask sets task.edit to true so an input tag is displayed', ()=>{
		// todo
	})

	it('updateTask sends a put request to the server and sets the task.edit to false', ()=>{
		// todo
	})

	it('getTodos returns a list of tasks to do', ()=>{
		// todo
	})
});