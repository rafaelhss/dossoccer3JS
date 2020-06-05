

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    
    
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
    
    if(location.search.indexOf("help")>0){
        $scope.currenthelp = 0;
        showhelp($scope.currenthelp);

        $scope.nexthelp = function(){
            $scope.currenthelp = $scope.currenthelp + 1;
            showhelp($scope.currenthelp);
        }    
    } else {
        hidehelp();
    }
})
   