'use strict';


describe('loginService',function  () {
     var loginService, loginCtrl, $controller, $httpBackend;
     var user = {'userName': 'test',
                    'password': 'test123'};
     beforeEach(module("angular-login-model"));
     beforeEach(module("LoginCtrl-model"));
     beforeEach(inject(function  ($controller, _loginService_, _$httpBackend_) {
          loginService = _loginService_;
          loginCtrl = $controller("loginCtrl",{loginService:loginService})
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
             // loginCtrl.submit()
              $httpBackend.flush();

              //expect(loginService.post(user)).toBe(respond);
              expect(loginCtrl.user.username).toBe('');
              expect(loginCtrl.submit().result).toBe(0);
        })

     it('should show error', function() {
               
                 var respond = {
                          'result': 0,
                          'rid': 1,
                          'uid': 2,
                          'token': 'sdfkdkqikdkkqe',
                          'error_msg': 'pasword'}
            
             $httpBackend.expectPOST('http://chanmao.ca/?r=%20rrclient/login', user).respond(401, respond);
              loginService.post(user);
             // loginCtrl.submit()
              $httpBackend.flush();

              //expect(loginService.post(user)).toBe(respond);
              expect(loginCtrl.user.username).toBe('');
              expect(loginCtrl.submit().response).toBe('ERROR!');
        })
     it('should save data in local', function  () {
            var respond = {
                          'result': '1',
                          'rid': '3',
                          'uid': '2',
                          'token': 'sdfkdkqikdkkqe',
                          'error_msg': 'pasword'}
            
             $httpBackend.expectPOST('http://chanmao.ca/?r=%20rrclient/login', user).respond(201, respond);
              loginService.post(user);
              $httpBackend.flush();
    
              expect(loginCtrl.submit().result).toBe('1');
              expect( window.localStorage.getItem("sv_rid")).toBe('3');
              expect(window.localStorage.getItem("sv_token")).toBe('sdfkdkqikdkkqe');
     })
     it('should alert error message', function  () {
            var respond = {
                          'result': '0',
                          'rid': '3',
                          'uid': '2',
                          'token': 'sdfkdkqikdkkqe',
                          'error_msg': 'pasword'}
            
             $httpBackend.expectPOST('http://chanmao.ca/?r=%20rrclient/login', user).respond(201, respond);
              loginService.post(user);
              $httpBackend.flush();
    
              expect(loginCtrl.submit().error_msg).toBe('pasword');
     })
      
})