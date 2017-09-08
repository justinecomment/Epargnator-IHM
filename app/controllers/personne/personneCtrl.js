myApp.controller('personneCtrl', function($scope, personneService, LxNotificationService, $location) {

     $scope.listePersonnes = [];

   personneService.getPersonnes().then(function(result){
       $scope.listePersonnes = result.data;
   });

   $scope.deletePersonne = function(){
       var personneName = this.listePersonne.name;
       
       LxNotificationService.confirm('', 'Voulez-vous vraiment supprimer ' + personneName + ' ?',
                {
                   cancel: 'Supprimer',
                   ok    : 'Cancel'
                }, function(cancel){
                    if (cancel){
                        $location.path('/personne');
                    }
                    else{
                        personneService.deletePersonne(personneName).then(function(result){
                            personneService.getPersonnes().then(function(result){
                                  $scope.listePersonnes = result.data;
                                 
                             });
                          
                        });
                         LxNotificationService.success('Personne supprimée');
                    }
        });
   }
   
});