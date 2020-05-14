
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
}

function runCommand(evt, team){
    if(evt.detail.cmd == "pass"){
        console.log("cmdinput: " + team + " " + evt.detail.axisx + " " + evt.detail.axisy)
        
        actionResult = passProcess(team, evt.detail.axisx, evt.detail.axisy);
        if(actionResult.newBallholder){
            game.ballholder = actionResult.newBallholder;
        }
        resetOffPlayers();
        return actionResult;
        
    } else if (evt.detail.cmd == "shot"){
        console.log("cmdinput shot: " + team)
        
        actionResult = shotProcess(team);
        game.scoreo = actionResult.scoreo;
        game.scorex = actionResult.scorex;
        game.ballholder = actionResult.newBallholder;
        resetOffPlayers();
        return actionResult;
        
    } else  if (evt.detail.cmd == "dibre"){
        console.log("cmdinput dibre: " + team)
        
        actionResult = dibreProcess(team);
        game.ballholder = actionResult.newBallholder;
        if(actionResult.playerdown){
            game.playersdown.push(actionResult.playerdown);
        }
        return actionResult;
    }
}

