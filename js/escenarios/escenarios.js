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
        "year":"1989",
        "playerteamname":"Brasil",
        "opposingteamname":"Uruguai",
        "scorex":0,
        "scoreo":0,
        "matchtime":90,
        "txt":"Brasil faz campanha irregular nas eliminatorias. Ultimo jogo. Precisa vencer para nao ficar de fora das copas pela primeira vez em sua historia.",
        "txtloss":"Brasil perde o jogo e esta fora das copas do mundo pela primeira vez em sua historia.",
        "txtdraw":"Brasil lutou heroicamente e conseguiu um empate. Nao foi suficiente para se classificar para a copa.",
        "txtwin":"Brasil vence e se classifica para a copa do mundo de 1994",
        "teamx":getJPSr(TEAMX),
        "teamo":getJPJr(getOpposingTeam(TEAMX))
    });
    
    escenarios.push({
        "year":"2003",
        "playerteamname":"Milan",
        "opposingteamname":"Liverpool",
        "scorex":0,
        "scoreo":3,
        "matchtime":45,
        "txt":"Final da Champions. Milan tem um grande time, mas fez pessimo primeiro tempo. Liverpool empolgado e Gerrard inspirado.",
        "txtloss":"Milan perde e ve o Liverpool voltar a conquistar a Europa apos duas decadas.",
        "txtdraw":"Milan luta muito e busca o empate. Podera sagrar-se campeao na disputa de penaltis?",
        "txtwin":"Milan conquista mais uma vez a Europa com uma virada historica!",
        "teamx":getJPSr(TEAMX),
        "teamo":getJPJr(getOpposingTeam(TEAMX))
    });
    
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
















