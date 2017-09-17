myApp.service('projetsService', function($http){

    var baseUrl = 'http://192.168.1.13:8080/epargnator-0.1/ws/';
    var projetSaved;
 
   this.saveProjet = function(projet){
       return projetSaved = projet;
   };

   this.getProjetSaved = function(){
       return projetSaved;
   };


   this.getProjets = function(){
      return $http.get(baseUrl + '/projet').success(function(result){
         return JSON.stringify(result);
      });
   };

   this.addProjet = function(dataProjet){
       return $http({
            method : 'POST',
            url : baseUrl + '/projet',
            dataType: 'json',
            data : dataProjet,
            headers: {
                'Content-Type': 'application/json'
            }
        })
   };

   this.deleteProjet = function(projetName){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/projet/' + projetName,
            data    : {"projetName":  projetName },
            headers : {'Content-Type': 'application/json'}
        })
   };

   this.editProjet= function(projetData){
         return $http({
            method : 'PUT',
            url : baseUrl + 'projet/' + projetData.name,
            dataType: 'json',
            data : projetData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };


})