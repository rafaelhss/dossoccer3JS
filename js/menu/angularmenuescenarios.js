var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope/*, $interval*/) {

    $scope.escenarios = getescenarios();
    $scope.escenarios.forEach(function(escenario){
        var stars = window.localStorage.getItem(getescenariokey(escenario));

        if(stars < 1) {
            escenario.star1 = false;
            escenario.star2 = false;
            escenario.star3 = false;
        } else if (stars < 2) {
            escenario.star1 = true;
            escenario.star2 = false;
            escenario.star3 = false;
        } else if (stars < 3){
            escenario.star1 = true;
            escenario.star2 = true;
            escenario.star3 = false;
        } else {
            escenario.star1 = true;
            escenario.star2 = true;
            escenario.star3 = true;
        }

    })
    

        function invertSectors(team){
            var newfield = [];
            team.field.forEach(function(player){
                if(player.sector == 0){player.sector = 5}
                else if(player.sector == 1){player.sector = 4}
                else if(player.sector == 2){player.sector = 3}
                else if(player.sector == 3){player.sector = 2}
                else if(player.sector == 4){player.sector = 1}
                else if(player.sector == 5){player.sector = 0}
                else if(player.sector == -1){player.sector = -2}
                else if(player.sector == -2){player.sector = -1}
                newfield.push(player);
            });
            team.field = newfield;
            return team;
        }

        
        $scope.chose = function(escenario){
            escenario.teamo = invertSectors(escenario.teamo);
            
            window.localStorage.setItem("escenario",JSON.stringify(escenario));
            if(escenario.tutorial){
                window.location.replace("gamemobile.html?help");
            } else {
                window.location.replace("gamemobile.html");    
            }
            
        }

});


