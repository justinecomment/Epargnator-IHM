myApp.service('menageService', function($http){
 
    var menage = 
    [
        {   
            "name":"justine", 
            "revenu": "1500",
            "composant_1": {
                "name" : "vol",
                "montant" : "3000"
             }
        },
        {   
            "name":"rafik", 
            "revenu": "2300",
            "composant_1": {
                "name" : "hotel",
                "montant" : "5000"
             }
        },
    ]

   this.getMenages = function(){
       return menage;
   };

})