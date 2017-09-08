myApp.controller('personneCtrl', function($scope, personneService) {

     $scope.listePersonnes = [];

   personneService.getPersonnes().then(function(result){
       $scope.listePersonnes = result.data;
       

   })
   
});