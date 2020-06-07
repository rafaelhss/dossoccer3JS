
function getOpposingTeam(team){
    if(team == TEAMO) return TEAMX;
    else return TEAMO;
}

function getPlayersSector(destSector, team){
    var players = [];
    game.field.forEach(function(player){
        if(player.sector == destSector && player.team == team){
            var down = false;
            //console.log("game.playersdown: " + game.playersdown.length)
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

function moveplayer(playerid, sector){
    game.field.forEach(function(player){
        if(player.id == playerid){
            player.sector = sector;
        }
    });
}


function getPlayer(sector, team) {
    var destPlayer = false;
    
    
    var players = game.field.filter(function(player) {
        return !game.playersdown.includes(player) && 
               player.sector == sector 
               && player.team == team;
    });
    
    if(players.length > 0){
        var i = Math.floor((Math.random() * players.length))
        destPlayer = players[i];
    }
    
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
        window.localStorage.setItem("scoreo", actionResult.scoreo)
    }
    if(!isNaN(actionResult.scorex)){
        game.scorex = actionResult.scorex;
        window.localStorage.setItem("scorex", actionResult.scorex)
    }
        
    if(actionResult.playerdown){
        game.playersdown.push(actionResult.playerdown);
        setTimeout(function(){
            waitdibre(actionResult.playerdown);
        }, GAME_WAIT_DIBRE)
    } 
}

function waitdibre(player){
    game.playersdown = game.playersdown.filter(function(el) { return el.id != player.id; }); 
}

function runCommand(evt, team){
    
    if(evt.detail.cmd == "pass"){
       // console.log("cmdinput: " + team + " " + evt.detail.axisx + " " + evt.detail.axisy)
        
        actionResult = passProcess(team, evt.detail.axisx, evt.detail.axisy);
        
        applyActionResult(actionResult);
        
        return actionResult;
        
    } else if (evt.detail.cmd == "shot"){
        
        actionResult = shotProcess(team);
        applyActionResult(actionResult);
        
        return actionResult;
        
    } else  if (evt.detail.cmd == "dibre"){
        
        actionResult = dibreProcess(team);
        
        applyActionResult(actionResult);
        
        return actionResult;
    }
}



    
    
function rand(n){
    return Math.floor(Math.random() * n);
}  
function createGame(escenario){
    
    
    var field = [];
    
    var playerfield = escenario.teamx.field;
    playerfield.forEach(function(player2){
                            field.push(player2);
                        })   
    
    var versusfield = escenario.teamo.field;
    versusfield.forEach(function(player2){
                            field.push(player2);
                        })   

    
    
    game.playersdown = [];
    game.ballholder = field[rand(20)];
    game.field = field;
    game.scorex = escenario.scorex;
    game.scoreo = escenario.scoreo;
    window.localStorage.setItem("scorex", game.scorex)
    window.localStorage.setItem("scoreo", game.scoreo)
    game.keeper = [];
    
    var playerkeeper =  escenario.teamx.keeper;
    game.keeper[playerkeeper.team] = playerkeeper;
    
    
    var versuskeeper =  escenario.teamo.keeper;
    game.keeper[versuskeeper.team] = versuskeeper;
    
    
    game.matchtime = escenario.matchtime * 60 / 90;
    
    game.playerteamname = escenario.playerteamname;
    game.opposingteamname = escenario.opposingteamname;
    
    
    return game;
}


