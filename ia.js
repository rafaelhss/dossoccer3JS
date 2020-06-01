var minDibreChance = 0.7;
var minShotChance = 0.4;


function tickOpponent(){
    var team = getOpposingTeam(game.playerteam);
   // console.log("ia para time "+ team)
    var actionresult = dibreProcess(team);
    if(actionresult.chance > minDibreChance){
     //   console.log("IA vai dibrar." + (actionresult.chance * 100).toFixed(2))
    } else {
        actionresult = shotProcess(team);
       // console.log("Ia nao Dibra." + (actionresult.chance * 100).toFixed(2))
        if(actionresult.chance > minShotChance){
         //   console.log("IA vai  chutaar "+ (actionresult.chance))  
        } else {
            var actionResults = getActions(team);
            var maxchance = 0;
            actionresult = actionResults[0];
            actionResults.forEach(function(item){
                if(item.chance > maxchance) {
                    maxchance = item.chance;
                    actionresult = item;
                }
            });
           // console.log("Ia vai: ")
        //    console.log(actionresult);
        }
    }
    applyActionResult(actionresult);
    return(actionresult);
}