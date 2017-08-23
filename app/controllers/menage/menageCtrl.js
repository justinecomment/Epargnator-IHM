myApp.controller('menageCtrl', function($scope, menageService) {

   $scope.listeMenages = menageService.getMenages();
   
});