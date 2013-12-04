(function() {
    'use strict';

    var app = angular.module("app");

    app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider.state('login', {
            templateUrl: 'js/login/login.html',
            controller: 'LoginController',
            url: '/login'
        });

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'js/home/home.html',
            controller: 'HomeController'
        });

        $urlRouterProvider
            .otherwise('/login');
    });

    app.run(function($state, AuthenticationService) {
        // do stuff here
        AuthenticationService.checkUser().then(function(response){
          var user = response.data;
          if(!user.name){
            $state.transitionTo('login');
          }
        });
    });
})();
