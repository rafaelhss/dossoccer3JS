function dibreProcess(team){
        var actionResult = {"team":team};
        actionResult.messages = [];
        actionResult.messages.push("Tentativa de dibre");
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
                    actionResult.messages.push("Dibrou. Oleee.");        
                } else {
                    actionResult.newBallholder = defender; 
                    actionResult.messages.push("Perdeu a bola");    
                }
                
                
            } else {
                actionResult.messages.push("Para de firula. Nao tem ninguem pra dibrar.");    
            }
        } else {
            actionResult.messages.push("Voce nao pode dibrar pq nao tem a bola");
        }     
        return actionResult;
        
    }