function kickoff(){
    
    game.field.forEach(function(player, index){
        var secname = "sector" + player.sector;
        var sector = document.getElementById(secname).firstChild;
        //var tag = "<ion-icon class=\"@@CLASS@@\" name=\"person\"></ion-icon>";
        var tag = "<span class=\"player @@CLASS@@\" name=\"person\" id=\"player"+ player.id +"\">"+ player.number +"</span>";
        
        if((index > 0) && ((index % 2) == 0)){
            tag += "</div><div>"
        }
        
        
        if(player.team == TEAMX){
           tag = tag.replace("@@CLASS@@","playerx");
        } else {
            tag = tag.replace("@@CLASS@@","playero");
        }
        
        sector.innerHTML = sector.innerHTML + tag;
               
    })
    
    window.localStorage.setItem("scorex", 0)
    window.localStorage.setItem("scoreo", 0)
    
    
    var actionResult = {};
    actionResult.events = [];
    actionResult.chance = 1;
    actionResult.scoreo = 0;
    actionResult.scorex = 0;
    //actionResult.newBallholder = game.ballholder;

    
    var escenario = JSON.parse(window.localStorage.getItem("escenario"));
            
    
    actionResult.events.push({
                    "command": ACTION_KICKOFF,
                    "status": ACTION_SUCCESS,
                    "actor":game.keeper[game.ballholder.team],
                    "actor2": game.keeper[getOpposingTeam(game.ballholder.team)],
                    "detail": [game.playerteamname,
                               game.opposingteamname,
                               escenario.txtkickoff,
                              escenario.matchtime]
                });
    
    return actionResult;
}