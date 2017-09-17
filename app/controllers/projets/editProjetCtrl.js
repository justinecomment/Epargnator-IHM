myApp.controller('editProjetCtrl', function($scope, projetsService, LxNotificationService, $location) {

    $scope.projetSaved = projetsService.getProjetSaved();
    $scope.composants = $scope.projetSaved.composantsProjet;
    var allComposants = [];
    $scope.listeProjets = [];
    console.log($scope.composants);

    $scope.editProjet = function(){
        if($scope.editProjetForm.$valid === true){
            for(var index= 0 ; index < $scope.composants.length ; index++){
                var composantsProjet ={
                    id : $scope.projetSaved.composant_id,
                    name : $scope.composants[index].name,
                    montant: $scope.composants[index].montant,
                    importance: $scope.composants[index].importance,
                };
                allComposants.push(composantsProjet);
             };

            var projetData = {
                "id": $scope.projetSaved.composant_id,
                "name":  document.getElementById("nomProjet").value,
                "dateLimite": 1502150400000,
                "composantsProjet": allComposants
            }

            console.log(projetData)

            projetData.composantsProjet = $scope.composants;
            $scope.listeProjets.push(projetData);

            console.log($scope.listeProjets)

            projetsService.editProjet(projetData).then(function(result){
                 projetsService.getProjets().then(function(result){
                    $scope.listeProjets = result.data;
                    $location.path('/projets');
                    LxNotificationService.notify('Projet modifié', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
                 });
             })
        }
    };

    $scope.addComposant = function(){
        if(document.getElementById("nomComposant").value != "" && document.getElementById("idMontant").value != "" ){
            $scope.composantData ={
                "composant_id" : $scope.composants.length + 1,
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

   $scope.deleteComposant = function(index){
        $scope.composants.splice(index, 1);
   }; 




});