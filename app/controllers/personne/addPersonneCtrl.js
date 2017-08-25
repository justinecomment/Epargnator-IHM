myApp.controller('addPersonneCtrl', function($scope, LxNotificationService, personneService) {
    
    $scope.personne = [];
    $scope.charges= [];

   $scope.addPersonne = function(){
        if($scope.addPersonneForm.$valid === true){
            var personneData ={
                  'name' : document.getElementById("nomPersonne").value,
                  'revenu': document.getElementById("revenu").value
             }
            
            personneData.charges = $scope.charges;
            console.log(personneData)
        
        }
        else{
            $scope.addPersonneForm.$valid === false;
        }
   };

   
   $scope.addCharge = function(){
        if(document.getElementById("nomCharge").value != "" && document.getElementById("montantCharge").value != "" ){
            $scope.chargeData ={
                "name": document.getElementById("nomCharge").value , 
                "montant":  document.getElementById("montantCharge").value 
            };

            $scope.charges.push($scope.chargeData);
            
            $('#nomCharge').val('');
            $('#montantCharge').val('');
        }
        else{
            LxNotificationService.notify('Vous devez entrer un Nom et un Montant', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
        }
   };


    $scope.onClickDeleteCharge = function(index){
        $scope.personne.splice(index, 1);
   }; 

   
});
