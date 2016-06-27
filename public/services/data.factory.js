(function(){

'use strict';

// const angular = require('angular');

function dataFactory($http, $q){

	var service = {
		getTodos: getTodos
	};

	return service;
	
	function getTodos(cb){
		return $http.get('/api/todos').then(cb);
	}
}

dataFactory.$inject = ['$http', '$q'];
angular.module('app').service('dataFactory', dataFactory);

})();