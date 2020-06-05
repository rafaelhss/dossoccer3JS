function getBrasilAlemanha2014(){
    
    var escenario = {
        "year":"2014",
        "playerteamname":"Brasil",
        "opposingteamname":"Alemanha",
        "scorex":0,
        "scoreo":7,
        "matchtime":20,
        "txt":"Semi final de copa do mundo, em casa, o Brasil toma o setimo gol no meio do segundo tempo. Mas o brasileiro nao desiste nunca!",
        "txtloss":"O Brasil amarga pior vexame da historia da selecao.",
        "txtdraw":"Empate heroico do Brasil, que chegou a perder por sete gols de diferenca. Mas como a fase eh negra, vai perder nos penaltis, quer ver?!",
        "txtwin":"Em video game todo sonho pode virar realidade. Parabens!",
        "teamx":getBrasil(TEAMX),
        "teamo":getAlemanha(getOpposingTeam(TEAMX)),
        "image":"scenes/brasil2014.png"
    }
    
    
    function getBrasil(team){
    
        function getKeeper(team){
            return  { 
                        name: "Julio Cesar",
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
                            name: "Maicon",
                            number: 2,
                            defense:6, 
                            pass:6, 
                            attack:4, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Dante",
                            number: 3,
                            defense:4, 
                            pass:4, 
                            attack:2, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Davi Luiz",
                            number: 4,
                            defense:6, 
                            pass:8, 
                            attack:5, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Marcelo",
                            number: 6,
                            defense:5, 
                            pass:5, 
                            attack:7, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Fernandinho",
                            number: 8,
                            defense:8, 
                            pass:9, 
                            attack:7, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Luiz Gustavo",
                            number: 5,
                            defense:4, 
                            pass:6, 
                            attack:6, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Hulk",
                            number: 7,
                            defense:6, 
                            pass:7, 
                            attack:8, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Oscar",
                            number: 10,
                            defense:4, 
                            pass:4, 
                            attack:4, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Bernard",
                            number: 21,
                            defense:4, 
                            pass:5, 
                            attack:6, 
                            team: team, 
                            sector:4,
                            id: Math.floor(Math.random() * 10000)
                            });     
                field.push({ 
                            name: "Fred",
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
        return {"field":field, "keeper":keeper, "name":"Brasil"}
    }
    
    function getAlemanha(team){
    
         
        function getKeeper(team){
            return  { 
                        name: "Neuer",
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
                                name: "Lahm",
                                number: 2,
                                defense:6, 
                                pass:6, 
                                attack:4, 
                                team: team, 
                                sector:1,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Boateng",
                                number: 3,
                                defense:4, 
                                pass:4, 
                                attack:2, 
                                team: team, 
                                sector:1,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Hummels",
                                number: 4,
                                defense:6, 
                                pass:8, 
                                attack:5, 
                                team: team, 
                                sector:0,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Howedes",
                                number: 6,
                                defense:5, 
                                pass:5, 
                                attack:7, 
                                team: team, 
                                sector:0,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Khedira",
                                number: 8,
                                defense:8, 
                                pass:9, 
                                attack:7, 
                                team: team, 
                                sector:2,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Schweinsteiger",
                                number: 10,
                                defense:4, 
                                pass:6, 
                                attack:6, 
                                team: team, 
                                sector:2,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Kroos",
                                number: 11,
                                defense:6, 
                                pass:7, 
                                attack:8, 
                                team: team, 
                                sector:3,
                                id: Math.floor(Math.random() * 10000)
                                }); 
                    field.push({ 
                                name: "Ozil",
                                number: 5,
                                defense:4, 
                                pass:4, 
                                attack:4, 
                                team: team, 
                                sector:3,
                                id: Math.floor(Math.random() * 10000)
                                }); 
                    field.push({ 
                                name: "Muller",
                                number: 7,
                                defense:4, 
                                pass:5, 
                                attack:6, 
                                team: team, 
                                sector:4,
                                id: Math.floor(Math.random() * 10000)
                                });     
                    field.push({ 
                                name: "Klose",
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
            return {"field":field, "keeper":keeper, "name":"Alemanha"}

        }   
    return escenario;
}
