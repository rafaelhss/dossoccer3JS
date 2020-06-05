function getBrasilUruguai93(){
    
    var escenario = {
        "year":"1993",
        "playerteamname":"Brasil",
        "opposingteamname":"Uruguai",
        "scorex":0,
        "scoreo":0,
        "matchtime":90,
        "txt":"Brasil faz campanha irregular nas eliminatorias. Ultimo jogo. Precisa vencer para nao ficar de fora das copas pela primeira vez em sua historia.",
        "txtkickoff":"Comeca o jogo. Todos os coracoes Brasileiros acompanham esse jogo decisivo.",
        "txtloss":"Brasil perde o jogo e esta fora das copas do mundo pela primeira vez em sua historia.",
        "txtdraw":"Brasil lutou heroicamente e conseguiu um empate. Nao foi suficiente para se classificar para a copa.",
        "txtwin":"Brasil vence e se classifica para a copa do mundo de 1994",
        "teamx":getBrasil(TEAMX),
        "teamo":getUruguai(getOpposingTeam(TEAMX)),
        "image":"scenes/brasil93.png"
    }
    
    
    function getBrasil(team){
    
        function getKeeper(team){
            return  { 
                        name: "Taffarel",
                        number: 1,
                        pass: 10,
                        attack:0,
                        defense:6, 
                        team: team, 
                        sector:-1,
                        id: Math.floor(Math.random() * 10000)                            
                    }
        }

        function getPlayers(team){
                var field = [];

                field.push({ 
                            name: "Jorginho",
                            number: 2,
                            defense:6, 
                            pass:6, 
                            attack:4, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Ricardo Rocha",
                            number: 3,
                            defense:4, 
                            pass:4, 
                            attack:2, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Ricardo Gomes",
                            number: 4,
                            defense:6, 
                            pass:8, 
                            attack:5, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Branco",
                            number: 6,
                            defense:5, 
                            pass:5, 
                            attack:7, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Dunga",
                            number: 8,
                            defense:8, 
                            pass:9, 
                            attack:7, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Mauro Silva",
                            number: 5,
                            defense:4, 
                            pass:6, 
                            attack:6, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Zinho",
                            number: 9,
                            defense:6, 
                            pass:7, 
                            attack:8, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Rai",
                            number: 10,
                            defense:4, 
                            pass:4, 
                            attack:4, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Bebeto",
                            number: 7,
                            defense:4, 
                            pass:5, 
                            attack:6, 
                            team: team, 
                            sector:4,
                            id: Math.floor(Math.random() * 10000)
                            });     
                field.push({ 
                            name: "Romario",
                            number: 11,
                            defense:4, 
                            pass:5, 
                            attack:5, 
                            team: team, 
                            sector:5,
                            id: Math.floor(Math.random() * 10000)
                            });             


                return field;
            }
        var field = getPlayers(team);
        var keeper = getKeeper(team);
        return {"field":field, "keeper":keeper, "name":"Brasil 93"}
    }
    
    function getUruguai(team){
    
         
        function getKeeper(team){
            return  { 
                        name: "Siboldi",
                        number: 1,
                        pass: 10,
                        attack:0,
                        defense:6, 
                        team: team, 
                        sector:-1,
                        id: Math.floor(Math.random() * 10000)                            
                    };
        }


        function getPlayers(team){
                    var field = [];

                    field.push({ 
                                name: "Canals",
                                number: 2,
                                defense:6, 
                                pass:6, 
                                attack:4, 
                                team: team, 
                                sector:1,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Herrera",
                                number: 3,
                                defense:4, 
                                pass:4, 
                                attack:2, 
                                team: team, 
                                sector:1,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Kanapkis",
                                number: 4,
                                defense:6, 
                                pass:8, 
                                attack:5, 
                                team: team, 
                                sector:0,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Mendez",
                                number: 6,
                                defense:5, 
                                pass:5, 
                                attack:7, 
                                team: team, 
                                sector:0,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Dorta",
                                number: 8,
                                defense:8, 
                                pass:9, 
                                attack:7, 
                                team: team, 
                                sector:2,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Batista",
                                number: 10,
                                defense:4, 
                                pass:6, 
                                attack:6, 
                                team: team, 
                                sector:2,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Gutierrez",
                                number: 11,
                                defense:6, 
                                pass:7, 
                                attack:8, 
                                team: team, 
                                sector:3,
                                id: Math.floor(Math.random() * 10000)
                                }); 
                    field.push({ 
                                name: "Francescoli",
                                number: 5,
                                defense:4, 
                                pass:4, 
                                attack:4, 
                                team: team, 
                                sector:3,
                                id: Math.floor(Math.random() * 10000)
                                }); 
                    field.push({ 
                                name: "Fonseca",
                                number: 7,
                                defense:4, 
                                pass:5, 
                                attack:6, 
                                team: team, 
                                sector:4,
                                id: Math.floor(Math.random() * 10000)
                                });     
                    field.push({ 
                                name: "Ruben Sosa",
                                number: 9,
                                defense:4, 
                                pass:5, 
                                attack:5, 
                                team: team, 
                                sector:5,
                                id: Math.floor(Math.random() * 10000)
                                });             


                    return field;
                }
            var field = getPlayers(team);
            var keeper = getKeeper(team);
            return {"field":field, "keeper":keeper, "name":"Uruguai"}

        }   
    return escenario;
}
