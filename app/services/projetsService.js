myApp.service('projetsService', function($http){

    var baseUrl = 'http://192.168.1.13:8080/epargnator-0.1/ws/';
 


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
   }

})