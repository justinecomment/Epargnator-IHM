myApp.service('projetsService', function($http){
 
var projets = 
[
    {   
        "name":"Bali", 
        "nbrComposants": "2",
        "dateLimite":"2018-08-30", 
        "composant_1": {
            "name" : "vol",
            "montant" : "3000",
            "importance" : "1" 
        }, 
        "composant_2": {
           "name": "nourriture",
           "montant": 2000,
           "importance": 1
       }
    },
    {   
        "name":"Maison", 
        "dateLimite":"2018-08-17", 
        "composant_1": {
            "name" : "toit" ,
            "montant" : "200000",
            "importance" : "2" 
        }
    }
]


   this.getProjets = function(){
       return projets;
   };

   this.postProjet = function(){
       return $http({
            method : 'POST',
            url : 'http://192.168.1.13:8080/epargnator-0.1/ws/projet',
            dataType: 'json',
            data : tableau,
            headers: {
                'Content-Type': 'application/json'
            }
        })
   }

})