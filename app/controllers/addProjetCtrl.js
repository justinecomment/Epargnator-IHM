myApp.controller('addProjetCtrl', function($scope) {
    $scope.submitAddBook = function(){
       if($scope.addBookForm.$valid === true){

            var formData = {
                'title': document.getElementById("title").value,
                'titleOriginal': document.getElementById("titleOriginal").value,
                'year': document.getElementById("year").value,
                'format': document.getElementById("format").value,
                'author': document.getElementById("author").value,
                'language': document.getElementById("language").value,
                'isbn': document.getElementById("isbn").value,
            } 
            console.log(formData);
       }
       else{
           console.log('error');
           $scope.addBookForm.$valid = false;
       }
        
    }

});