describe('Data Factory', ()=>{
	var dataService;

	beforeEach(module('app'));

	// beforeEach(inject(function(_dataService_) {
	// 	Data = _dataService_;
	// }))

	// beforeEach(()=>{
	// 	inject(($injector)=>{
	// 		dataService = $injector.get('dataService');
	// 	})
	// });

	// Error: [$injector:unpr] Unknown provider: DataProvider <- Data
	// not sure how to fix this, don't quite get what I'm missing on how to inject the service.

	it('it has a dummy spec to test 2 + 2', ()=>{
		expect(2+2).toEqual(4);
	})
});