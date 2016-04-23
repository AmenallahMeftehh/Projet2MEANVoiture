var myapp =angular.module('myapp',['ngRoute']).config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/login',{
  templateUrl:'public/pages/login.html',
  controller:'loginController'
})
.when('/home',{
  templateUrl:'public/pages/home.html',
  controller:'homeController'

})

.when('/voiture',{
  templateUrl:'public/pages/voiture.html',
  controller:'voitureController'

})

.otherwise({
    redirectTo: '/home'
          })

}]);
