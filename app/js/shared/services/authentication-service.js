angular.module("app").factory('AuthenticationService', function($http) {
  // these routes map to stubbed API endpoints in config/server.js
  return {
    checkUser: function(){
      return $http.get('/user');  
    },

    login: function(credentials) {
      return $http.post('/login', credentials);
    },
    logout: function() {
      return $http.post('/logout');
    }
  };
});
