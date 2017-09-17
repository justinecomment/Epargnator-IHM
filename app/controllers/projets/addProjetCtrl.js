myApp.controller('addProjetCtrl', function($scope, LxNotificationService, projetsService, $location) {

    $scope.listeProjets = [];
    $scope.composants = [];
    var allComposants = [];

    $scope.addProjet = function(){
        if($scope.addProjetForm.$valid === true){
             for(var index= 0 ; index < $scope.composants.length ; index++){
                var composantsProjet ={
                    name : $scope.composants[index].name,
                    montant: $scope.composants[index].montant,
                    importance: $scope.composants[index].importance,
                };
                allComposants.push(composantsProjet);
             };

            var personneData = {
                "name":  document.getElementById("nomProjet").value,
                "dateLimite": 1502150400000,
                "composantsProjet": allComposants
            }

            personneData.composantsProjet = $scope.composants;
            $scope.listeProjets.push(personneData);

            projetsService.addProjet(personneData).then(function(result){
                 projetsService.getProjets().then(function(result){
                    $scope.listeProjets = result.data;
                    $location.path('/projets');
                    LxNotificationService.notify('Projet ajoutée', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
                 });
             })
        }
        else{
            $scope.addProjetForm.$valid === false;
        }
   };

   $scope.deleteComposant = function(index){
        $scope.composants.splice(index, 1);
   }; 

   $scope.addComposant = function(){
        if(document.getElementById("nomComposant").value != "" && document.getElementById("idMontant").value != "" ){
            $scope.composantData ={
                "name" : document.getElementById("nomComposant").value,
                "montant" : document.getElementById("idMontant").value,
                "importance" : document.getElementById("Importance").value
            };
            $scope.composants.push($scope.composantData);
            $('#nomComposant').val('');
            $('#idMontant').val('');
            $('#Importance').val('Importance');
        }
        else{
            LxNotificationService.notify('Vous devez entrer un Nom et un Montant', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
        }
   };

});