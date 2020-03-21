function passGetDefendersSector(destSector, team){
        var players = [];
        game.field.forEach(function(player){
            if(player.sector == destSector && player.team != team){
                players.push(player);    
            }
        });
        return players;
    }
    
    function passGetDestinationPlayer(destSector) {
        var destPlayer = false;
        game.field.forEach(function(player){
            if(player.sector == destSector && player.team == game.ballholder.team){
                destPlayer = player;    
            }
            if(!destPlayer && player.sector == destSector && player.team != game.ballholder.team){
                destPlayer = player;    
            }
        });
        return destPlayer;
    }
  var passGetDestinationSector = function(sector, axisx, axisy) {
        
        if(sector == -1){
            if(axisx >=0) {return 1}
            else {return 0}            
        }
        if(sector == -2){
            if(axisx >=0) {return 5}
            else {return 4}            
        }
        if(axisx > 0 && axisy > 0) {
            if(sector == 0) {return 3}
            if(sector == 2) {return 5}
        }
        if(axisx == 0 && axisy > 0) {
            if(sector == 0) {return 2}
            if(sector == 1) {return 3}
            if(sector == 2) {return 4}
            if(sector == 3) {return 5}
        }
        if(axisx < 0 && axisy > 0) {
            if(sector == 1) {return 2}
            if(sector == 3) {return 4}
        }
        if(axisx < 0 && axisy == 0) {
            if(sector == 1) {return 0}
            if(sector == 3) {return 2}
            if(sector == 5) {return 4}            
        }
        if(axisx < 0 && axisy < 0) {
            if(sector == 3) {return 0}
            if(sector == 5) {return 2}        
        }
        if(axisx == 0 && axisy < 0) {
            if(sector == 2) {return 0}
            if(sector == 3) {return 1}
            if(sector == 4) {return 2}
            if(sector == 5) {return 3}
        }
        if(axisx > 0 && axisy < 0) {
            if(sector == 2) {return 1}
            if(sector == 4) {return 3}
        }
        if(axisx > 0 && axisy == 0) {
            if(sector == 0) {return 1}
            if(sector == 2) {return 3}
            if(sector == 4) {return 5}
        }
        return sector;        
    }
    
    var checkPassBoundaries = function(sector, axisx, axisy){
        console.log("sector: " + sector + " axisx: " + axisx +" axisy: " + axisy)
        if(axisx < 0){
            if(sector == 0 || sector == 2 || sector == 4) {
                return false;
            }
        }
        if(axisx > 0){
            if(sector == 1 || sector == 3 || sector == 5) {
                return false;
            }
        }
        if(axisy < 0){
            if(sector == 0 || sector == 1) {
                return false;
            }
        }
        if(axisy > 0){
            if(sector == 4 || sector == 5) {
                return false;
            }
        }
        return true;
    }
    var passProcess = function(team, axisx, axisy){   
        var actionResult = {};
        actionResult.messages = [];
        actionResult.messages.push("Tentativa de passe");
        
        if(game.ballholder.team == team) {
            console.log("Vai passar do: " +  game.ballholder.sector + " para: " + passGetDestinationSector(game.ballholder.sector, axisx, axisy));
            console.log(game.field[game.ballholder.sector])
            if (checkPassBoundaries(game.ballholder.sector, axisx, axisy)){
                var destSector = passGetDestinationSector(game.ballholder.sector, axisx, axisy);
                var destPlayer = passGetDestinationPlayer(destSector);
                
                console.log("Passe vai para: ")
                console.log(destPlayer)
                if(destPlayer) {
                    if(destPlayer.team == game.ballholder.team){
                        var passerPass = game.ballholder.pass;
                        var destPass= destPlayer.pass;
                        
                        var defenders = passGetDefendersSector(destSector, game.ballholder.team);
                        var deff = 0;
                        defenders.forEach(function(defender){
                            deff += defender.defense;
                        })
                        var chance = (passerPass + destPass)/(passerPass + destPass + deff)
                        var random = Math.random();
                        var success = (random < chance);
                        console.log("passerPass: " + passerPass)
                        console.log("destPass: " + destPass)
                        console.log("deff: " + deff)
                        console.log("chance: " + chance)
                        console.log("random: " + random)
                        console.log("passou: " + (random < chance))
                        
                        
                        console.log(defenders)
                        if(success){
                            actionResult.messages.push("Passe com sucesso")
                            actionResult.newBallholder = destPlayer;                                
                        } else {
                            actionResult.messages.push("Passe interceptado")
                            if(defenders.length > 0){
                                actionResult.newBallholder = defenders[0];
                                actionResult.messages.push("Bola com " + defenders[0].number)
                            }
                            
                        }
                        
                        

                    } else {
                        actionResult.newBallholder = destPlayer;
                        actionResult.messages.push("Passe errado. bola com outro time.");
                        console.log("Passe errado. bola com outro time."); 
                    }
                } else {
                    actionResult.newBallholder = game.keeper[getOpposingTeam(game.ballholder.team)];
                    actionResult.messages.push("Passe pra ninguem. Lateral pro outro time.");
                    console.log("Passe pra ninguem. Lateral pro outro time.");
                }
                
            } else {
                actionResult.newBallholder = game.keeper[getOpposingTeam(game.ballholder.team)];
                console.log("Passe pra fora do campo");                
            }
        } else {
            console.log("Nao posso passar pq nao estou com a bola. game.ballholder.team: " + game.ballholder.team + " team: "+team);
            console.log(game.ballholder);
            
        }
        
        console.log("fim pass");
        return actionResult;
    }
    