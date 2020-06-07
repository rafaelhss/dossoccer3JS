

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
    
    
    $scope.selectedplayerid = 0;
    $scope.selectedsector = 999;
    $scope.clicksector = function(sector){
        var players = getPlayersSector(sector, TEAMX);
        console.log("click: " + players);
        if($scope.selectedplayerid == 0){
            $scope.selectedplayerid = players[0].id;
            $scope.selectedsector = sector
        } else if(players.length > 2 && $scope.selectedsector == sector && $scope.selectedplayerid != players[2].id){
            $scope.selectedplayerid = players[2].id;   
        } else if(players.length > 1 && $scope.selectedsector == sector && $scope.selectedplayerid != players[1].id){
            $scope.selectedplayerid = players[1].id;   
        } else if($scope.selectedsector == sector){
            $scope.selectedplayerid = 0;   
        } else {
            moveplayer($scope.selectedplayerid, sector);
            updatefieldsectors();
            $scope.selectedplayerid = 0;
            $scope.selectedsector = 999;
        }
        if($scope.selectedplayerid != 0){
            showselect($scope.selectedplayerid);
        } else {
            hideselect();
        }
    }
    
})
   