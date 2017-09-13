myApp.controller('projetsCtrl', function($scope, projetsService) {
    

    projetsService.getProjets().then(function(result){
        $scope.listeProjets = result.data;
        console.log($scope.listeProjets);
    });

    
});