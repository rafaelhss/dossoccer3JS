var game = {};
var sound = true;
function rungame(){
    initcmd();
    
    document.addEventListener("cmdinput", function(evt){
        var actionResult = runCommand(evt, TEAMX);//jogador eh sempre o X
        processActionResult(actionResult);
    });
    
    game = createTestGame();  
        
    var actionResult = kickoff(game);
    processActionResult(actionResult);
    
    setInterval(function(){
        processActionResult(tickOpponent());
    }, 1500);
}