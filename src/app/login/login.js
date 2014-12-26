var model = angular.module('LoginCtrl-model', []);

model.controller('loginCtrl', function (loginService) {
		this.user = {'username':'',
					 'password':''	
					}
		this.submit = function  () {
			this.url ='login/'
			loginService.post(this.user, this.url)
		 	this.response = loginService.post(this.user, this.url)

			// console.log(this.response)
			if(this.response.result == '0'){
				window.localStorage.setItem("sv_uid", this.response.uid);
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

		this.logout = function  () {
			window.localStorage.removeItem("sv_uid");
			window.localStorage.removeItem("sv_rid");
			window.localStorage.removeItem("sv_token");
		}

		this.checkAuth = function  () {
			this.url ='authorize/'
			if(window.localStorage.getItem("sv_uid") !== null){
				this.authData = {'rid': window.localStorage.getItem("sv_rid"),
                        		   'uid': window.localStorage.getItem("sv_uid")
                        			}
                loginService.post(this.authData, this.url)				        			
				
				this.response = loginService.post(this.authData, this.url)

				if(this.response.result == '0'){
					
                    }else{
					alert(this.response.error_msg)
				}
			}else{
				return
			}

			return {
					response: this.response,
					result: this.response.result,
					error_msg: this.response.error_msg,
					authData: this.authData
			}

		}

});