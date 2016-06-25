describe('Data Service', ()=>{
	var Data;

	beforeEach(angular.mock.module('app'));
	beforeEach(inject((_Data_)=>{
		Data = _Data_;
	}));

	it('should exist', ()=>{
		expect(Data).toBeDefined();
	});
});