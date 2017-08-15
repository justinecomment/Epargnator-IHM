myApp.service('projetsService', function($http){
 
var tableau = 
[
    {   
        "projet":"Bali", 
        "date":"30/08/2018", 
        "composant_1": {
            "name" : "vol",
            "montant" : "3000",
            "importance" : "1" 
        }
    },
    {   
        "projet":"Maison", 
        "date":"20/06/2020", 
        "composant_1": {
            "name" : "toit" ,
            "montant" : "200000",
            "importance" : "2" 
        }
    }
]


   this.getProjets = function(){
       return tableau;
   };

})