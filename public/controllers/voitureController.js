myapp.controller('voitureController', ['$scope', '$http', function($scope, $http) {
    console.log('hello');
    var refresh = function () {
        $http.get('/listvoiture').success(function (response) {
            $scope.listvoiture = response;
            console.log('i received the data i requested');
        });
    };
    refresh();

    // fontion ajouter
    $scope.addVoiture = function () {
        console.log($scope.voiture);
        $http.post('/listvoiture', $scope.voiture).success(function (response) {
            console.log(response);
            refresh();
        });
    };
    // fonction supprimer
    $scope.remove = function (id) {
        console.log(id);
        $http.delete('/listvoiture/' + id).success(function (response) {
            refresh();
        })
    };
    //    fonction recuperer une voiture
    $scope.edit = function (id) {
        console.log(id);
        $http.get('/listvoiture/' + id).success(function (response) {
            $scope.voiture = response;
        });

    };
    // fonction pour mettre a jour un contact
    $scope.update = function () {
        console.log($scope.voiture._id);
        $http.put('/listvoiture/' + $scope.voiture._id, $scope.voiture).success(function (response) {
            refresh();
        });
    };
    //    fonction deselectionner une voiture
    $scope.deselect = function () {
        $scope.voiture = "";
    }

}]);