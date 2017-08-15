myApp.controller('addProjetCtrl', function($scope, LxNotificationService) {

    $scope.listeProjets = [];

    $scope.submitAddProjet = function(){
        if($scope.addProjetForm.$valid === true){
            
            var dataProjet = {
                'name': document.getElementById("nomProjet").value,
                'dateLimite': document.getElementById("date").value,
                'composant_1': { 
                    "name" : document.getElementById("nomComposant").value,
                    'montant': document.getElementById("idMontant").value,
                    'importance': document.getElementById("Importance").value
                }
            };
            if(document.getElementById("nomComposant").value != "" && document.getElementById("idMontant").value != "" ){
                $scope.listeProjets.push(dataProjet);
                $('#nomComposant').val('');
                $('#idMontant').val('');
                console.log($scope.listeProjets);
            }
            else{
                LxNotificationService.notify('Vous devez entrer un Nom et un Montant', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
            }
        }
        else{
            $scope.addProjetForm.$valid === false;
        }
   };

   $scope.onClickDeleteComposant = function(index){
        $scope.listeProjets.splice(index, 1);
   }; 
   

});