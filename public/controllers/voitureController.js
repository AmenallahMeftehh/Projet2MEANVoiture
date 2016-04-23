myapp.controller('voitureController',['$scope','$http',function($scope,$http){
console.log('hello');
var refresh = function(){
  $http.get('/listvoiture').success(function(response){
    $scope.listvoiture=response;
    console.log('i received the data i requested');
  });
};
refresh();

// fontion ajouter
  $scope.addVoiture = function(){
    console.log($scope.voiture);
    $http.post('/listvoiture',$scope.voiture).success(function(response){
      console.log(response);
      refresh();
    });
  };


}]);
