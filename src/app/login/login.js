var model = angular.module('LoginCtrl-model', []);

model.controller('loginCtrl', function (loginService) {
		this.user = {'username':'',
					 'password':''	
					}
		this.submit = function  () {
		 this.response = loginService.post(this.user)
			console.log(this.response)
			return {
					response: this.response,
					result: this.response.result
					}
		}

});