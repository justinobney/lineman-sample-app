angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService) {
  $scope.title = "Super Social App";

  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
});
