
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

function applyActionResult(actionResult){
    if(actionResult.newBallholder){
        game.ballholder = actionResult.newBallholder;
    }
    if(!isNaN(actionResult.scoreo)){
        game.scoreo = actionResult.scoreo;
    }
    if(!isNaN(actionResult.scorex)){
        game.scorex = actionResult.scorex;
    }
        
    if(actionResult.playerdown){
        game.playersdown.push(actionResult.playerdown);
    } else {
        resetOffPlayers();
    }
}

function runCommand(evt, team){
    if(evt.detail.cmd == "pass"){
        console.log("cmdinput: " + team + " " + evt.detail.axisx + " " + evt.detail.axisy)
        
        actionResult = passProcess(team, evt.detail.axisx, evt.detail.axisy);
        
        applyActionResult(actionResult);
        
        return actionResult;
        
    } else if (evt.detail.cmd == "shot"){
        console.log("cmdinput shot: " + team)
        
        actionResult = shotProcess(team);
        applyActionResult(actionResult)
        return actionResult;
        
    } else  if (evt.detail.cmd == "dibre"){
        console.log("cmdinput dibre: " + team)
        
        actionResult = dibreProcess(team);
        
        applyActionResult(actionResult);
        
        return actionResult;
    }
}

