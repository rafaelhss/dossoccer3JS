

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope/*, $interval*/) {
    
    
    $scope.gameon = true;
    rungame();
    
    
    $scope.sound = false;
    
    var escenario = JSON.parse(window.localStorage.getItem("escenario"));

    
    $scope.playerteamname = escenario.playerteamname;
    $scope.opposingteamname =  escenario.opposingteamname;
    
    
    $scope.go = function(){
        $scope.gameon = true;
        rungame();
    }    
    $scope.voice = function(voiceon){
        sound = voiceon;
        $scope.sound = voiceon;
    }
})
   