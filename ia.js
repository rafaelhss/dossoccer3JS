var minDibreChance = 0.7;
var minShotChance = 0.4;

var lastactions = [];

function tickOpponent(){

    if(game.ballholder.team == TEAMO) {      
    
        var chosenindex = -1;
        var team = TEAMO;
        
        var actionresult = dibreProcess(team);
        if(actionresult.chance > minDibreChance){
            console.log("IA vai dibrar." + (actionresult.chance * 100).toFixed(2))
        } else {
            actionresult = shotProcess(team);
            console.log("Ia nao Dibra." + (actionresult.chance * 100).toFixed(2))
            if(actionresult.chance > minShotChance){
                console.log("IA vai  chutaar "+ (actionresult.chance))  
            } else {
                var actionResults = getPossibleActions(team);
                var maxchance = 0;
                actionresult = actionResults[0];
                actionResults.forEach(function(item, index){
                    if((item.chance > maxchance) && (!lastactions.includes(index)))  {
                        maxchance = item.chance;
                        actionresult = item;
                        chosenindex = index;
                    }
                });
            }
        }
        if(actionresult.success){
            lastactions.push(chosenindex);
            if(lastactions.length > 2){
                lastactions.shift();
            }
        }
    } else {
        lastactions = [];
    }
    
    return(actionresult);
}

var getPossibleActions = function(team){
    return [//passProcess(team,-1,-1),
            passProcess(team,0,-1),
            passProcess(team,1,-1),
            //passProcess(team,-1,0),

           // dibreProcess(team),

            passProcess(team,1,0),
            //passProcess(team,-1,1),
            passProcess(team,0,1),
            passProcess(team,1,1)//,

        //    shotProcess(team,-1,0)
          ]
}