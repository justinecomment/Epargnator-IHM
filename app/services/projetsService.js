myApp.service('projetsService', function($http){

    var baseUrl = 'http://192.168.1.13:8080/epargnator-0.1/ws/';
 


   this.getProjets = function(){
      return $http.get(baseUrl + '/projet').success(function(result){
         return JSON.stringify(result);
      });
   };

//    this.postProjet = function(){
//        return $http({
//             method : 'POST',
//             url : 'http://192.168.1.13:8080/epargnator-0.1/ws/projet',
//             dataType: 'json',
//             data : tableau,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//    }

})