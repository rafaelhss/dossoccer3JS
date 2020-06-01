function dibreProcess(team){
        var actionResult = {"team":team};
        actionResult.events = [];
        actionResult.newBallholder = game.ballholder;
        actionResult.playerdown = false;
        actionResult.chance = 0;
        
        if(game.ballholder.team == team) {
            var defender = getPlayer(game.ballholder.sector, getOpposingTeam(game.ballholder.team));
            if(defender) {
                var att = game.ballholder.attack;
                var deff = defender.defense;
                var chance = (att)/(att + (deff/2));
                actionResult.chance = chance;
                var random = Math.random();
                var success = (random < chance);
                //console.log("deff: " + deff)
                //console.log("att: " + att)
                //console.log("chance: " + chance)
                //console.log("random: " + random)
                //console.log("passou: " + (random < chance))
                
                if(success) {
                    actionResult.playerdown = defender;
                    actionResult.events.push({
                        "command": ACTION_DIBRE,
                        "status": ACTION_SUCCESS,
                        "actor":game.ballholder,
                        "actor2": defender
                    });
                } else {
                    actionResult.newBallholder = defender; 
                    actionResult.events.push({
                        "command": ACTION_DIBRE,
                        "status": ACTION_UNSUCCESS,
                        "actor":game.ballholder,
                        "actor2": defender
                    });
                }                
            } else {
                actionResult.events.push({
                    "command": ACTION_DIBRE,
                    "status": ACTION_UNSUCCESS,
                    "actor":game.ballholder,
                    "detail":[ACTION_DIBRE_NODEFENDER]
                });
            }
        } else {
            //console.log("Voce nao pode dibrar pq nao tem a bola");
        }     
        return actionResult;
        
    }