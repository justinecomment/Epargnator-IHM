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
   .when('/personne', {
    controller: 'personneCtrl',
    templateUrl: 'views/personne/personne.html'
  })
  .when('/add/personne', {
    controller: 'addPersonneCtrl',
    templateUrl: 'views/personne/addPersonne.html'
  })
  .when('/edit/personne', {
    controller: 'editPersonneCtrl',
    templateUrl: 'views/personne/editPersonne.html'
  })
   .otherwise({
    redirectTo: '/'
  });

}]);

