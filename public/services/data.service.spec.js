describe('Data Factory', ()=>{
	var dataService;

	describe('A suite', ()=>{
		it('contains spec with an expectation', ()=>{
			expect(true).toBe(true);
		})
	})

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject((_dataService_, $http, $q)=>{
		dataService = _dataService_;
	}));

	it('deleteTodo', ()=>{
		// todo
	})

	it('getTodos', ()=>{
		// todo
	})

	it('postTodo', ()=>{
		// todo
	})

	it('putTodo', ()=>{
		// todo
	})

});