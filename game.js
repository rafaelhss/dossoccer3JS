var game = {};
function rungame(){
    initcmd();
    
    document.addEventListener("cmdinput", function(evt){
        var actionResult = runCommand(evt, TEAMX);
        processActionResult(actionResult);
    });
    
    game = createTestGame();  
        
    var actionResult = kickoff(game);
    processActionResult(actionResult);
    
    setInterval(function(){
        processActionResult(tickOpponent());
    }, 1500);
}