
    


  var passGetDestinationSector = function(sector, axisx, axisy) {
        
        if(sector == -1){
            if(axisy >=0) {return 1}
            else {return 0}            
        }
        if(sector == -2){
            if(axisy >=0) {return 5}
            else {return 4}            
        }
        if(axisx > 0 && axisy > 0) { //right down
            if(sector == 0) {return 3}
            if(sector == 2) {return 5}
        }
        if(axisx == 0 && axisy > 0) { // down
            if(sector == 0) {return 1}
            if(sector == 2) {return 3}
            if(sector == 4) {return 5}
        }
        if(axisx < 0 && axisy > 0) { //left down
            if(sector == 2) {return 1}
            if(sector == 4) {return 3}
        }
        if(axisx < 0 && axisy == 0) { //left
            if(sector == 2) {return 0}
            if(sector == 4) {return 2}
            if(sector == 3) {return 1}
            if(sector == 5) {return 3}
        }
        if(axisx < 0 && axisy < 0) { // left up
            if(sector == 3) {return 0}
            if(sector == 5) {return 2}        
        }
        if(axisx == 0 && axisy < 0) { //up
            if(sector == 1) {return 0}
            if(sector == 3) {return 2}
            if(sector == 5) {return 4}
        }
        if(axisx > 0 && axisy < 0) { //right up
            if(sector == 1) {return 2}
            if(sector == 3) {return 4}
        }
        if(axisx > 0 && axisy == 0) { // right
            if(sector == 0) {return 2}
            if(sector == 2) {return 4}
            if(sector == 1) {return 3}
            if(sector == 3) {return 5}
        }
        return sector;        
    }
    
    var checkPassBoundaries = function(sector, axisx, axisy){
        //console.log("sector: " + sector + " axisx: " + axisx +" axisy: " + axisy)
        if(axisx < 0){ //left
            if(sector == 0 || sector == 1) {
                return false;
            }
        }
        if(axisx > 0){ // right
            if(sector == 4 || sector == 5) {
                return false;
            }
        }
        if(axisy < 0){ // up
            if(sector == 0 || sector == 2 || sector == 4) {
                return false;
            }
        }
        if(axisy > 0){ //down
            if(sector == 1 || sector == 3 || sector == 5) {
                return false;
            }
        }
        return true;
    }
    var passProcess = function(team, axisx, axisy){ 
        var actionResult = {"team":team};
        actionResult.events = [];
        actionResult.chance = 0;
        
        if(game.ballholder.team == team) {
            if (checkPassBoundaries(game.ballholder.sector, axisx, axisy)){
                var destSector = passGetDestinationSector(game.ballholder.sector, axisx, axisy);
                var destPlayer = getPlayer(destSector, game.ballholder.team);
                if(!destPlayer) {
                    destPlayer = getPlayer(destSector, getOpposingTeam(game.ballholder.team));
                }
                
                if(destPlayer) {
                    if(destPlayer.team == game.ballholder.team){
                        var passerPass = game.ballholder.pass;
                        var destPass = destPlayer.pass;
                        
                        var defenders = getPlayersSector(destSector, getOpposingTeam(game.ballholder.team));
                        var deff = 0;
                        defenders.forEach(function(defender){
                            deff += defender.defense;
                        })
                        //um passe pelo menos 50% de chance.
                        var passchancefix = 0.5;
                        //os outros 50% sao proporcionais a quantidade de defensores no setorde destivo versus a qualidade do passador e do recebedor.
                        var passchancevar = (1-passchancefix) * ((passerPass + destPass)/(passerPass + destPass + deff));
                        
                        var chance = passchancevar + passchancefix;
                        actionResult.chance = chance;
                        var random = Math.random();
                        var success = (random < chance);
                        //console.log("passerPass: " + passerPass)
                        //console.log("destPass: " + destPass)
                        //console.log("deff: " + deff)
                        //console.log("chance: " + chance)
                        //console.log("random: " + random)
                        //console.log("passou: " + (random < chance))
                        
                        
                        //console.log(defenders)
                        if(success){
                            actionResult.success = true;
                            
                            actionResult.events.push({
                                "command": ACTION_PASS,
                                "status": ACTION_SUCCESS,
                                "actor":game.ballholder,
                                "actor2": destPlayer
                            });
                            actionResult.newBallholder = destPlayer;                                
                        } else {
                            var event = {
                                "command": ACTION_PASS,
                                "status": ACTION_UNSUCCESS,
                                "actor":game.ballholder,
                                "detail":[ACTION_PASS_INTERCEPTED]
                            };
                            
                            if(defenders.length > 0){
                                actionResult.newBallholder = defenders[0];
                                event.actor2 = defenders[0];
                            }
                            
                            actionResult.events.push(event);
                        }
                        
                        

                    } else {
                        actionResult.events.push({
                            "command": ACTION_PASS,
                            "status": ACTION_UNSUCCESS,
                            "actor":game.ballholder,
                            "actor2": destPlayer,
                            "detail":[ACTION_PASS_NOTEAMATE]
                        });
                        actionResult.newBallholder = destPlayer;
                        //console.log("Passe errado. bola com outro time."); 
                    }
                } else {
                    actionResult.events.push({
                        "command": ACTION_PASS,
                        "status": ACTION_UNSUCCESS,
                        "actor":game.ballholder,
                        "detail":[ACTION_PASS_NOBODY]
                    });
                    actionResult.newBallholder = game.keeper[getOpposingTeam(game.ballholder.team)];
                    
                    //console.log("Passe pra ninguem. Lateral pro outro time.");
                }
                
            } else {
                actionResult.events.push({
                    "command": ACTION_PASS,
                    "status": ACTION_UNSUCCESS,
                    "actor":game.ballholder,
                    "detail":[ACTION_PASS_OFFBOUNDS]
                });
                actionResult.newBallholder = game.keeper[getOpposingTeam(game.ballholder.team)];
            //    console.log("Passe pra fora do campo: " + axisx + axisy);
            }
        } else {
         //   console.log("Nao posso passar pq nao estou com a bola. game.ballholder.team: " + game.ballholder.team + " team: "+team);
            //console.log(game.ballholder);
        }
        
        return actionResult;
    }
    