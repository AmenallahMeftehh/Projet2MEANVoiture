myapp.controller('voitureController',['$scope','$http',function($scope,$http){
console.log('hello');
var refresh = function(){
  $http.get('/meanapp').success(function(response){
    $scope.meanapp=response;
    console.log('i received the data i requested');
  });
};
refresh();

// fontion ajouter
  $scope.addVoiture = function(){
    console.log($scope.voiture);
    $http.post('/meanapp',$scope.voiture).success(function(response){
      console.log(response);
      refresh();
    });
  };


}]);
