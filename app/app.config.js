myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'accueilCtrl',
    templateUrl: 'views/accueil.html'
  })
  .when('/projets', {
    controller: 'projetsCtrl',
    templateUrl: 'views/projets.html'
  })
   .otherwise({
    redirectTo: '/'
  });
}]);


