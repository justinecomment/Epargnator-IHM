myApp.controller('addMenageCtrl', function($scope, LxNotificationService) {
    
    $scope.listeMenages = [];

   $scope.addMenage = function(){
        if($scope.addMenageForm.$valid === true){
            var formData = {
                 "name" : document.getElementById("nomMenage").value,
                'revenu': document.getElementById("revenu").value,
                 'composant_1': { 
                    "name" : $scope.dataComposant.composant_1.name,
                    'montant': $scope.dataComposant.composant_1.montant
                 }
            }
            console.log(formData);
        }
        else{
            $scope.addMenageForm.$valid === false;
        }
   };

   $scope.onClickDeleteComposant = function(index){
        $scope.listeMenages.splice(index, 1);
   }; 

   $scope.onClickAddComposant = function(){
        $scope.dataComposant = {
            "composant_1":{
                "name": document.getElementById("nomComposant").value,
                "montant": document.getElementById("montant").value
            }
         };
        
         if(document.getElementById("nomComposant").value != "" && document.getElementById("montant").value != "" ){
                $scope.listeMenages.push($scope.dataComposant);
                $('#nomComposant').val('');
                $('#montant').val('');
          }
          else{
               LxNotificationService.notify('Vous devez entrer un Nom et un Montant', undefined, undefined, undefined, undefined, undefined, 2 * 2000);
          }
   };

   
});