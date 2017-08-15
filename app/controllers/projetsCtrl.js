myApp.controller('projetsCtrl', function($scope, projetsService) {
    
    $scope.listeProjets = projetsService.getProjets();
});