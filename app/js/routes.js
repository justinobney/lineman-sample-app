angular.module("app").config(function($stateProvider, $locationProvider) {

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

  $stateProvider.state('listOfBooks', {
    url: '/ist-of-books',
    templateUrl: 'js/books/books.html',
    controller: 'BooksController'
  });
});

angular.module("app").run(function($state){
  $state.transitionTo('login');
});