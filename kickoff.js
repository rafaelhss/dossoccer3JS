function kickoff(){
    
    game.field.forEach(function(player){
        var secname = "sector" + player.sector;
        var sector = document.getElementById(secname);
        var tag = "<ion-icon class=\"@@CLASS@@\" name=\"person\"></ion-icon>";
        if(player.team == TEAMX){
           tag = tag.replace("@@CLASS@@","teamx");
        } else {
            tag = tag.replace("@@CLASS@@","teamo");
        }
        
        sector.innerHTML = sector.innerHTML + tag;
               
    })
    
    
    
    var actionResult = {};
    actionResult.events = [];
    actionResult.chance = 1;
    actionResult.scoreo = 0;
    actionResult.scorex = 0;
    //actionResult.newBallholder = game.ballholder;

    actionResult.events.push({
                    "command": ACTION_KICKOFF,
                    "status": ACTION_SUCCESS,
                    "actor":game.keeper[game.ballholder.team],
                    "actor2": game.keeper[getOpposingTeam(game.ballholder.team)],
                    "detail": [window.localStorage.getItem("playerteamname"),
                               window.localStorage.getItem("opposingteamname")]
                });
    
    return actionResult;
}