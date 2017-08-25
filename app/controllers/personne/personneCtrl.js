myApp.controller('personneCtrl', function($scope, personneService) {

   $scope.listePersonnes = personneService.getPersonne();
   
});