myApp.controller('addPersonneCtrl', function($scope, LxNotificationService, personneService, $location) {
    
    $scope.personne = [];
    $scope.charges= [];
    var chargesIntegrales = [];

   $scope.addPersonne = function(){
        if($scope.addPersonneForm.$valid === true){
            for (var index= 0 ; index<$scope.charges.length ; index++){
                var chargeComplete =  {name : $scope.charges[index].name , montant: $scope.charges[index].montant} ;
                chargesIntegrales.push(chargeComplete);
            };
           
            var personneData ={
                  "name"         : document.getElementById("nomPersonne").value,
                  "revenu"       : document.getElementById("revenu").value,
                  "dateCreation" : "2017-09-06",
                  "dateMiseAJour": "2017-09-06",
                  "chargesPersonne": chargesIntegrales
             };

            personneData.chargesPersonne = $scope.charges;
            $scope.personne.push(personneData);
            personneService.addPersonne(personneData);
            LxNotificationService.notify('Personne enregistrée', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
            $location.path('/personne');
        }
        else{
            $scope.addPersonneForm.$valid === false;
            LxNotificationService.notify('Verifier que les champs sont bien remplis', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
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
        $scope.charges.splice(index, 1);
   }; 

   
});
