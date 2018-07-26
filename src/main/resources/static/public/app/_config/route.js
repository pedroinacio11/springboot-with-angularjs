/**
 * Created by pedro.inacio on 25/07/2018.
 */

angular.module("phinacio").config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

angular.module("phinacio").config(
    function($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl:"public/app/home/home.html",
                controller:"HomeCtrl"
            })
            .when("/about",{
                templateUrl:"public/app/about/about.html",
                controller:"AboutCtrl"
            })
        $routeProvider.otherwise({redirectTo:"/home"});
    });



