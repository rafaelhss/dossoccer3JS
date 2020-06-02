
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
        window.localStorage.setItem("scoreo", actionResult.scoreo)
    }
    if(!isNaN(actionResult.scorex)){
        game.scorex = actionResult.scorex;
        window.localStorage.setItem("scorex", actionResult.scorex)
    }
        
    if(actionResult.playerdown){
        game.playersdown.push(actionResult.playerdown);
    } else {
        resetOffPlayers();
    }
}

function runCommand(evt, team){
    
     if((game.keeper['x'].team == game.keeper['o'].team)){
            console.log("XXXXXXXXXXXXXXXXXXXX")
        }
    if(evt.detail.cmd == "pass"){
       // console.log("cmdinput: " + team + " " + evt.detail.axisx + " " + evt.detail.axisy)
        
        actionResult = passProcess(team, evt.detail.axisx, evt.detail.axisy);
        
        applyActionResult(actionResult);
        
         if((game.keeper['x'].team == game.keeper['o'].team)){
            console.log("XXXXXXXXXXXXXXXXXXXX")
        }
        
        return actionResult;
        
    } else if (evt.detail.cmd == "shot"){
        console.log("cmdinput shot: " + team)
        
        actionResult = shotProcess(team);
        applyActionResult(actionResult);
        
         if((game.keeper['x'].team == game.keeper['o'].team)){
            console.log("XXXXXXXXXXXXXXXXXXXX")
        }
        return actionResult;
        
    } else  if (evt.detail.cmd == "dibre"){
        console.log("cmdinput dibre: " + team)
        
        actionResult = dibreProcess(team);
        
        applyActionResult(actionResult);
        
        return actionResult;
    }
}



    
    
function rand(n){
    return Math.floor(Math.random() * n);
}  
function createTestGame(){
    

    
    var field = [];
    
    var playerfield = window.localStorage.getItem("playerfield");
    playerfield = JSON.parse(playerfield);
    playerfield.forEach(function(player2){
                            field.push(player2);
                        })   
    
    var versusfield = window.localStorage.getItem("versusfield");
    versusfield = JSON.parse(versusfield);
    versusfield.forEach(function(player2){
                            field.push(player2);
                        })   

    
    
    game.playersdown = [];
    game.ballholder = field[rand(20)];
    game.field = field;
    game.scorex = 0;
    game.scoreo = 0;
    window.localStorage.setItem("scorex", game.scorex)
    window.localStorage.setItem("scoreo", game.scoreo)
    game.keeper = [];
    
    var playerkeeper =  JSON.parse(window.localStorage.getItem("playerkeeper"));
    game.keeper[playerkeeper.team] = playerkeeper;
    
    
    var versuskeeper =  JSON.parse(window.localStorage.getItem("versuskeeper"));
    game.keeper[versuskeeper.team] = versuskeeper;
    
    
    return game;
}


