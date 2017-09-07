myApp.controller('addPersonneCtrl', function($scope, LxNotificationService, personneService) {
    
    $scope.personne = [];
    $scope.charges= [];
    var chargesIntegrales = [];

   $scope.addPersonne = function(){
        if($scope.addPersonneForm.$valid === true){
            for (var i= 0 ; i< $scope.charges.length ; i++){
                var chargeComplete =  {name : $scope.charges[i].name , montant: $scope.charges[i].montant} ;
                chargesIntegrales.push(chargeComplete);
            };
           

            var personneData ={
                  "name"         : document.getElementById("nomPersonne").value,
                  "revenu"       : document.getElementById("revenu").value,
                  "dateCreation" : "2017-08-08",
                  "dateMiseAJour": "2017-08-08",
                  "chargesPersonne": chargesIntegrales
             };
            personneData.chargesPersonne = $scope.charges;
            $scope.personne.push(personneData);
            personneService.addPersonne(personneData);
            console.log($scope.personne)
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
        $scope.personne.splice(index, 1);
   }; 

   
});
