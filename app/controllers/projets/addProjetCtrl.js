myApp.controller('addProjetCtrl', function($scope, LxNotificationService, projetsService) {

    $scope.listeProjets = [];

   

    $scope.submitAddProjet = function(){
        
        if($scope.addProjetForm.$valid === true){
            var dataProjet = {
                'name': document.getElementById("nomProjet").value,
                'dateLimite': document.getElementById("date").value,
                'composant_1': { 
                    "name" : $scope.dataComposant.composant_1.name,
                    'montant': $scope.dataComposant.composant_1.montant,
                    'importance': $scope.dataComposant.composant_1.importance
                }
            };
           console.log(dataProjet)
            //projetsService.postProjet();
        }
        else{
            $scope.addProjetForm.$valid === false;
            console.log('error')
        }
   };

   $scope.onClickDeleteComposant = function(index){
        $scope.listeProjets.splice(index, 1);
   }; 

   $scope.onClickAddComposant = function(){
        $scope.dataComposant = {
            'composant_1': { 
                "name" : document.getElementById("nomComposant").value,
                'montant': document.getElementById("idMontant").value,
                'importance': document.getElementById("Importance").value
            }
         };
        
         if(document.getElementById("nomComposant").value != "" && document.getElementById("idMontant").value != "" ){
                $scope.listeProjets.push( $scope.dataComposant);
                $('#nomComposant').val('');
                $('#idMontant').val('');
          }
          else{
                LxNotificationService.notify('Vous devez entrer un Nom et un Montant', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
          }
   };
   
});