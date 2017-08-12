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
  .when('/addProjet', {
    controller: 'addProjetCtrl',
    templateUrl: 'views/addProjet.html'
  })
   .otherwise({
    redirectTo: '/'
  });
}]);


