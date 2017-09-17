myApp.controller('projetsCtrl', function($scope, projetsService, LxNotificationService, $location) {
    
    $scope.listeProjets = [];

    projetsService.getProjets().then(function(result){
        $scope.listeProjets = result.data;
    });

    $scope.deleteProjet = function(){
        var projetName = this.listeProjet.name;
        
         LxNotificationService.confirm('', 'Voulez-vous vraiment supprimer ' + projetName + ' ?',
                {
                   cancel: 'Supprimer',
                   ok    : 'Cancel'
                }, function(cancel){
                    if (cancel){
                        $location.path('/projets');
                    }
                    else{
                        projetsService.deleteProjet(projetName).then(function(result){
                            projetsService.getProjets().then(function(result){
                                  $scope.listeProjets = result.data;
                             });
                        });
                         LxNotificationService.success('Projet supprimé');
                    }
        });
    };


    
});