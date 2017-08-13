myApp.controller('projetsCtrl', function($scope, $compile) {
        
    $scope.listeComposants = [];
    $scope.listeProjets = [];

    
    $scope.submitAddProjet = function(){
        if($scope.addProjetForm.$valid === true){
            var dataProjet = {
                'projet': document.getElementById("nom").value,
                'date': this.vm.datePicker.input.date
            }
             $scope.listeProjets.push(dataProjet);
        }
        else{
            console.log('invalid');
        }
   };


    $scope.onClickAddComposant = function(){
           var dataComposant = {
                'nomComposant': this.nomComposant,
                'montant': this.montant
            };

            $scope.listeComposants.push(dataComposant);
            $('#idComposant').val('');
            $('#idMontant').val('');
    };
   
   $scope.onClickDeleteComposant = function(index){
        $scope.listeComposants.splice(index, 1);
   }; 
   

});