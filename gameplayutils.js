
function getOpposingTeam(team){
    if(team == TEAMO) return TEAMX;
    else return TEAMO;
}

function getPlayersSector(destSector, team){
    var players = [];
    game.field.forEach(function(player){
        if(player.sector == destSector && player.team == team){
            var down = false;
            game.playersdown.forEach(function(playerdown){
                if(playerdown.id == player.id){
                    down = true;
                }
            })
            if(!down){
                players.push(player);    
            }
        }
    });
    return players;
}

function getPlayer(sector, team) {
    var destPlayer = false;
    game.field.forEach(function(player){
        if(player.sector == sector && player.team == team){
            var down = false;
            game.playersdown.forEach(function(playerdown){
                if(playerdown.id == player.id){
                    down = true;
                }
            })
            if(!down){
                destPlayer = player;    
            }
        }
        
       /* if(!destPlayer && player.sector == sector && player.team != team){
            destPlayer = player;    
        }*/
    });
    return destPlayer;
}

function resetOffPlayers(){
    game.playersdown = [];
     console.log("reset: " + game.playersdown.length)
       
}