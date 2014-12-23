'use strict';


describe('loginService',function  () {
	var loginService, $httpBackend;
	var user = {'userName': 'test',
     			'password': 'test123'};
	beforeEach(module("angular-login-model"));
	beforeEach(inject(function  (_loginService_, _$httpBackend_) {
		loginService = _loginService_;
		$httpBackend = _$httpBackend_;

	}));

	it('should login success', function() {
     		
     		 var respond = {
     	               'result': 0,
     	               'rid': 1,
     	               'uid': 2,
     	               'token': 'sdfkdkqikdkkqe',
     	               'error_msg': 'pasword'}
     	  
     	  $httpBackend.expectPOST('http://chanmao.ca/?r=%20rrclient/login', user).respond(201, respond);
     	  loginService.post(user);
     	   
     	   $httpBackend.flush();
     	    expect(loginService.post(user)).toBe(0);
     	    

     	}),
		it('should login fail', function() {
		
			 var respond = {
		               'result': 1,
		               'rid': 1,
		               'uid': 2,
		               'token': 'sdfkdkqikdkkqe',
		               'error_msg': 'pasword'}
		  
		  $httpBackend.expectPOST('http://chanmao.ca/?r=%20rrclient/login', user).respond(201, respond);
		  loginService.post(user);
		   
		   $httpBackend.flush();
		    expect(loginService.post(user)).toBe(1);
		    

		}),
		
		it('should be ERROR!', function() {
			
			var respond = {
		               'result': 0,
		               'rid': 1,
		               'uid': 2,
		               'token': 'sdfkdkqikdkkqe',
		               'error_msg': 'pasword'};
		  
		   

		    $httpBackend.expectPOST('http://chanmao.ca/?r=%20rrclient/login',user).respond(401, respond);
		    loginService.post(user);
		   
		   $httpBackend.flush();
		   expect(loginService.post(user)).toBe("ERROR!");
		   

		});
	 
})