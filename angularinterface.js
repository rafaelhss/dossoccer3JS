

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope/*, $interval*/) {
    
    
    //$scope.gameon = true;
    
    $scope.playerteamname = window.localStorage.getItem("playerteamname");
    $scope.opposingteamname =  window.localStorage.getItem("opposingteamname");
    
    
    $scope.go = function(){
        $scope.gameon = true;
        rungame();
    }    
    $scope.voice = function(voiceon){
        sound = voiceon;
        $scope.sound = voiceon;
        console.log(voiceon)
    }
})
   