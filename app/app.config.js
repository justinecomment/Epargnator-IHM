myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'accueilCtrl',
    templateUrl: 'views/accueil.html'
  })
  .when('/projets', {
    controller: 'projetsCtrl',
    templateUrl: 'views/projets/projets.html'
  })
   .when('/add/projet', {
    controller: 'addProjetCtrl',
    templateUrl: 'views/projets/addProjet.html'
  })
   .when('/menage', {
    controller: 'menageCtrl',
    templateUrl: 'views/menage/menage.html'
  })
  .when('/add/menage', {
    controller: 'addMenageCtrl',
    templateUrl: 'views/menage/addMenage.html'
  })
   .otherwise({
    redirectTo: '/'
  });
}]);


