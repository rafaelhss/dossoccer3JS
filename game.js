var game = {};
var sound = true;
function rungame(){
    initcmd();
    
    document.addEventListener("cmdinput", function(evt){
        //var actionResult = runCommand(evt, game.ballholder.team);//DEBUG
        
        var actionResult = runCommand(evt, TEAMX);//jogador eh sempre o X
        processActionResult(actionResult);
    });
    
    game = createTestGame();  
        
    var actionResult = kickoff(game);
    processActionResult(actionResult);
    
    setInterval(function(){
        var actionresult = tickOpponent(TEAMO);
        if(actionresult != undefined){
            applyActionResult(actionresult);
            processActionResult(actionresult);   
        }
    }, GAME_IA_INTERVAL);
    
     
    setInterval(function(){
            
            game.matchtime = game.matchtime - 1;
            document.dispatchEvent(new CustomEvent("matchtimetick", {detail:{"time":game.matchtime}}));
            if(game.matchtime == 0 ) {
                var actionResult = gameover(game);
                processActionResult(actionResult);   
                
                setTimeout(function(){
                    window.location.replace("gameover.html");
                },3000)
                
            }
        }, 1000 )
}