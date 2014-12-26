var model = angular.module('LoginCtrl-model', []);

model.controller('loginCtrl', function (loginService) {
		this.user = {'username':'',
					 'password':''	
					}
		this.submit = function  () {
		 this.response = loginService.post(this.user)
			// console.log(this.response)
			if(this.response.result == '1'){
				window.localStorage.setItem("sv_rid", this.response.rid);
				window.localStorage.setItem("sv_token", this.response.token);
			}else{
				alert(this.response.error_msg)
			}

			return {
					response: this.response,
					result: this.response.result,
					error_msg: this.response.error_msg
					}
		}

});