myApp.controller('personneCtrl', function($scope, personneService, LxNotificationService, $location) {

     $scope.listePersonnes = [];

   personneService.getPersonnes().then(function(result){
       $scope.listePersonnes = result.data;
   });

   $scope.deletePersonne = function(){
       var personneId = this.listePersonne.id;
       
       LxNotificationService.confirm('', 'Voulez-vous vraiment supprimer ' + this.listePersonne.name + ' ?',
                {
                   cancel: 'Supprimer',
                   ok    : 'Cancel'
                }, function(cancel){
                    if (cancel){
                        $location.path('/personne');
                    }
                    else{
                        personneService.deletePersonne(personneId).then(function(result){
                            personneService.getPersonnes().then(function(result){
                                  $scope.listePersonnes = result.data;
                                 
                             });
                          
                        });
                         LxNotificationService.success('Personne supprimée');
                    }
        });
   };

   $scope.editPersonne = function(){
       personneService.savePersonne(this.listePersonne);
       $location.path('/edit/personne');
   }
   
});