function shotGetSectorsAhead(){
    //console.log("shotGetSectorsAhead: ")
        //console.log(game.ballholder)
    if(game.ballholder.sector == 0){
        if(game.ballholder.team == TEAMX) { return [0,2,4] }
        else {return [0]}
    }
    if(game.ballholder.sector == 1){
        if(game.ballholder.team == TEAMX) { return [1,3,5] }
        else {return [1]}
    }
    if(game.ballholder.sector == 2){
        if(game.ballholder.team == TEAMX) { return [2,4] }
        else {return [0,2]}
    }
    if(game.ballholder.sector == 3){
        if(game.ballholder.team == TEAMX) { return [3,5] }
        else {return [1,3]}
    }
    if(game.ballholder.sector == 4){
        if(game.ballholder.team == TEAMX) { return [4] }
        else {return [0,2,4]}
    }
    if(game.ballholder.sector == 5){
        if(game.ballholder.team == TEAMX) { return [5] }
        else {return [1,3,5]}
    }
    return [0,1,2,3,4,5];
}

function shotProcess(team){
        var actionResult = {"team":team};
        actionResult.events = [];
        actionResult.scoreo = game.scoreo;
        actionResult.scorex = game.scorex;
        actionResult.newBallholder = game.ballholder;
        actionResult.chance = 0;
        
        if(game.ballholder.team == team) {
            var sectors = shotGetSectorsAhead();
            var deff = 0;
                
            sectors.forEach(function(sector){
                var defenders = getPlayersSector(sector, getOpposingTeam(game.ballholder.team));
                defenders.forEach(function(defender){
                    deff += defender.defense;
                })
            })
            var keeperDeff = game.keeper[getOpposingTeam(game.ballholder.team)].defense;
            
           // console.log(game.ballholder);
        //    console.log(team);
            var att = game.ballholder.attack;

            var chance = (att)/(att + keeperDeff + keeperDeff + deff)
            actionResult.chance = chance;
            var random = Math.random();
            var success = (random < chance);
          
            /*console.log("keeperDeff: " + keeperDeff)
            console.log("deff: " + deff)
            console.log("att: " + att)
            console.log("chance: " + chance)
            console.log("random: " + random)
            console.log("passou: " + (random < chance))
            */
            if(success) {
                actionResult.events.push({
                    "command": ACTION_SHOT,
                    "status": ACTION_SUCCESS,
                    "actor":game.ballholder,
                    "actor2": game.keeper[getOpposingTeam(game.ballholder.team)]
                });
                
                if(game.ballholder.team == TEAMO) {
                    actionResult.scoreo = actionResult.scoreo + 1 
                }
                else {
                    actionResult.scorex = actionResult.scorex + 1
                }                 
            } else {
                actionResult.events.push({
                    "command": ACTION_SHOT,
                    "status": ACTION_UNSUCCESS,
                    "actor":game.ballholder,
                    "actor2": game.keeper[getOpposingTeam(game.ballholder.team)]
                });
            }
            actionResult.newBallholder = game.keeper[getOpposingTeam(game.ballholder.team)];
        } else {
           // console.log("Voce nao esta com a bola e nao pode bater no gol");
        }
        return actionResult;
    }
 