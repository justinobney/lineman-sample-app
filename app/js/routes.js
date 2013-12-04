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
            templateUrl: 'js/home/home.html',
            abstract: true
        });

        $stateProvider.state('home.index', {
            url: '/home',
            views: {
              "home-main-nav": {
                templateUrl: 'js/home/home-top-nav.html'
              },
              "home-content": {
                templateUrl: 'js/home/index.html'
              }
            }
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
