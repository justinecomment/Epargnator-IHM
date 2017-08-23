myApp.controller('addMenageCtrl', function($scope) {

   $scope.addMenage = function(){
        
        if($scope.addMenageForm.$valid === true){
            var dataProjet = {
                'name': document.getElementById("nomMenage").value,
                'revenu': document.getElementById("revenu").value,
            };
           console.log(dataProjet)
        }
        else{
            $scope.addMenageForm.$valid === false;
            console.log('error')
        }
   };

   
});