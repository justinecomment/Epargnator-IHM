myApp.service('personneService', function($http){
 
    var charges = [];
    var nbrCharges = null;

    var personne = 
    [
        {   
            "name":"justine", 
            "revenu": "1500",
            "charge_1": {
                "name" : "vol",
                "montant" : "3000"
             }
        },
        {   
            "name":"rafik", 
            "revenu": "2300",
             "charge_1": {
                "name" : "vol",
                "montant" : "3000"
             }
        },
    ]

    this.getPersonne = function(){
       return personne;
    };

})


