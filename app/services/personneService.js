myApp.service('personneService', function($http){
 
    var baseUrl = 'http://192.168.1.13:8080/epargnator-0.1/ws';
    var charges = [];
    var nbrCharges = null;



    this.addPersonne = function(dataToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/personne', 
            dataType: 'json', 
            data: dataToPost,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    this.getPersonnes = function(){
        return $http.get(baseUrl + '/personne').success(function(result){
            JSON.stringify(result);
            return result;
        })
    };

    this.deletePersonne = function(personeName){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/personne/' + personeName,
            data    : {"name":  personeName },
            headers : {'Content-Type': 'application/json'}
        })
    };

});






/***  INTERCEPTOR ERROR **/
myApp.config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('myHttpInterceptor');
}]);

myApp.factory('myHttpInterceptor', function ($q) {
     return {
        responseError: function (response) {

            if(response.status == 500){
                console.log("500");
                 return $q.reject(response);
            }
            else if(response.status == 404){
                console.log("404");
                 return $q.reject(response);
            }
            else{
                console.log("autre error: " , response.status);
                return $q.reject(response);
            }
       }
    };
});



