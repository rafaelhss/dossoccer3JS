function getescenariokey(escenario){
    return escenario.year + 
                    escenario.playerteamname + 
                   // escenario.scorex +
                //    escenario.scoreo +
                    escenario.opposingteamname;    
}


function getescenarios(){
    var escenarios = [];
    
       
    escenarios.push({
        "tutorial":true,
        "year":"2020",
        "playerteamname":"Tutorial",
        "opposingteamname":"Tutorial",
        "scorex":4,
        "scoreo":3,
        "matchtime":90,
        "txt":"Aprenda os comandos basicos do jogo.",
        "txtloss":"Tutorial concluido.",
        "txtdraw":"Tutorial concluido.",
        "txtwin":"Tutorial concluido.",
        "teamx":getJPSr(TEAMX),
        "teamo":getJPJr(getOpposingTeam(TEAMX))
    });
    
    escenarios.push(getBrasilUruguai93());
    escenarios.push(getLiverpoolMilan05());
    escenarios.push(getVascoPalmeiras2000());
    escenarios.push(getBrasilAlemanha2014());
    

       
    return escenarios;    
}
















