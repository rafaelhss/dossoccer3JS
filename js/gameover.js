function gameover(game){
    
    
    
    var result ={};
    result.scorex = game.scorex;
    result.scoreo = game.scoreo;
    
    window.localStorage.setItem("result", JSON.stringify(result));
    
    var actionResult = {};
    actionResult.events = [];
    actionResult.chance = 1;
    //actionResult.newBallholder = game.ballholder;

    actionResult.events.push({
                    "command": ACTION_GAMEOVER,
                    "status": ACTION_SUCCESS,
                    "actor":game.keeper[game.ballholder.team],
                    "actor2": game.keeper[getOpposingTeam(game.ballholder.team)]
                });
    
    return actionResult;
}