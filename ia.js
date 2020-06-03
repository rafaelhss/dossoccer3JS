var minDibreChance = 0.7;
var minShotChance = 0.4;


function tickOpponent(team){

    if(game.ballholder.team == team) {      
    
        
        var actionresult = dibreProcess(team);
        if(actionresult.chance > minDibreChance){
            console.log("IA vai dibrar." + (actionresult.chance * 100).toFixed(2))
        } else {
            actionresult = shotProcess(team);
            console.log("Ia nao Dibra." + (actionresult.chance * 100).toFixed(2))
            if(actionresult.chance > minShotChance || game.ballholder.sector == 0 || game.ballholder.sector == 1){
                console.log("IA vai  chutaar "+ (actionresult.chance))  
            } else {
                var actionResults = getPossibleActions(team);
                var maxchance = 0;
                actionresult = actionResults[0];
                actionResults.forEach(function(item){
                    console.log("item.chance: " + item.chance)
                    if(item.chance > maxchance)  {
                        maxchance = item.chance;
                        actionresult = item;
                    }
                });
            }
        }
    }
    
    return(actionresult);
}

var getPossibleActions = function(team){
    return [passProcess(team,-1,-1),
           // passProcess(team,0,-1),
        //    passProcess(team,1,-1),
            passProcess(team,-1,0),

           // dibreProcess(team),

            //passProcess(team,1,0),
            passProcess(team,-1,1),
            //passProcess(team,0,1),
            //passProcess(team,1,1)//,

        //    shotProcess(team,-1,0)
          ]
}