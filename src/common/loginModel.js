'use strict';

var model = angular.module('angular-login-model', []);


 model.service('loginService', [ '$http', function( $http) {
	var model = this;
	
	model.post = function(user, url) {
			$http.post('http://chanmao.ca/?r=%20rrclient/' + url, user).success(function(response) {
		      model.result = response;
		    }).error(function() {
		      model.result = 'ERROR!';
		    });
		    return model.result;
	  };
}]);