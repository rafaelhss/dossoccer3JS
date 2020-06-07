function kickoff(){
    
    updatefieldsectors();
    
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