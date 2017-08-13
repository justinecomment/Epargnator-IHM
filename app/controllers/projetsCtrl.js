myApp.controller('projetsCtrl', function($scope) {
    
    $scope.submitAddProjet = function(){
        if($scope.addProjetForm.$valid === true){
            var formData = {
                'projet': document.getElementById("nom").value,
                'date': this.vm.datePicker.input.date,
            }
            console.log(formData);
            //  $("#categorie").append("<li> <div class='chip mr'> <span class='chip__label'>" + categorieRecovered + "</span> </div> </li>");

        }
        else{
            console.log('invalid');
        }
    }
});