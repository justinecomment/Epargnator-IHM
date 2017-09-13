myApp.controller('editPersonneCtrl', function($scope, personneService, LxNotificationService, $location) {

    $scope.personneSaved = personneService.getPersonneSaved();
    $scope.charges = $scope.personneSaved.chargesPersonne;
    var chargesIntegrales = [];
    $scope.personne = [];


    $scope.addCharge = function(){
        if(document.getElementById("nomCharge").value != "" && document.getElementById("montantCharge").value != "" ){
            $scope.chargeData ={
                "id": $scope.charges.length + 1, 
                "name": document.getElementById("nomCharge").value, 
                "montant": document.getElementById("montantCharge").value
            };

            $scope.charges.push($scope.chargeData);
            $('#nomCharge').val('');
            $('#montantCharge').val('');
        }
        else{
            LxNotificationService.notify('Vous devez entrer un Nom et un Montant', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
        }
   };


   $scope.deleteCharge = function(index){
       $scope.charges.splice(index, 1);
   }; 


   $scope.editPersonne = function(){
        if($scope.editPersonneForm.$valid === true){
            for (var index= 0 ; index < $scope.charges.length ; index++){
                var chargeComplete ={
                    id : $scope.charges[index].id, 
                    name : $scope.charges[index].name, 
                    montant: $scope.charges[index].montant
                };
                chargesIntegrales.push(chargeComplete);
            };

            var personneData ={
                  "id": $scope.personneSaved.id,
                  "name"         : document.getElementById("nomPersonne").value,
                  "revenu"       : document.getElementById("revenu").value,
                  "chargesPersonne": chargesIntegrales
             };
             personneData.chargesPersonne = $scope.charges;
             $scope.personne.push(personneData);

             personneService.editPersonne(personneData).then(function(result){
                 personneService.getPersonnes().then(function(result){
                    $scope.listePersonnes = result.data;
                    $location.path('/personne');
                    LxNotificationService.notify('Personne modifiée', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
                 });
             })

          }
    };


});
