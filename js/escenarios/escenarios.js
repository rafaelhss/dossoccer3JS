function getescenariokey(escenario){
    return escenario.year + 
                    escenario.playerteamname + 
                   // escenario.scorex +
                //    escenario.scoreo +
                    escenario.opposingteamname;    
}


function getescenarios(){
    var escenarios = [];
    
    escenarios.push(getBrasilUruguai93());
    escenarios.push(getLiverpoolMilan05());
    escenarios.push(getVascoPalmeiras2000());
    escenarios.push(getBrasilAlemanha2014());
    
    
    escenarios.push({
        "year":"2003",
        "playerteamname":"Teste",
        "opposingteamname":"Teste2",
        "scorex":4,
        "scoreo":3,
        "matchtime":2,
        "txt":"Final da Champions. Milan tem um grande time, mas fez pessimo primeiro tempo. Liverpool empolgado e Gerrard inspirado.",
        "txtloss":"Milan perde e ve o Liverpool voltar a conquistar a Europa apos duas decadas.",
        "txtdraw":"Milan luta muito e busca o empate. Podera sagrar-se campeao na disputa de penaltis?",
        "txtwin":"Milan conquista mais uma vez a Europa com uma virada historica!",
        "teamx":getJPSr(TEAMX),
        "teamo":getJPJr(getOpposingTeam(TEAMX))
    });
       
    return escenarios;    
}
















