function getVascoPalmeiras2000(){
    
    var escenario = {
        "year":"2000",
        "playerteamname":"Vasco",
        "opposingteamname":"Palmeiras",
        "scorex":1,
        "scoreo":3,
        "matchtime":30,
        "txt":"Final da copa mercossul, Tuta faz o terceiro para o Palmeiras no final do primeiro tempo. Na volta, Romario desconta de penalti. Vasco empolgado acredita na virada.",
        "txtloss":"O Vascao nao consegue superar o inicio fulmnante do Palmeiras e amarga mais um vice.",
        "txtdraw":"O Empate leva a decisao da copa mercossul para os penaltis. O Vasco foi guerreiro e conquista a chance de levar o titulo nos penaltis.",
        "txtwin":"Isso e Vasco! O gigante da colina nao desistiu e consegue, heroicamente, mais um titulo internacional.!",
        "teamx":getVasco(TEAMX),
        "teamo":getPalmeiras(getOpposingTeam(TEAMX)),
        "image":"scenes/vascopalmeiras.png"
    }
    
    
    function getVasco(team){
    
        function getKeeper(team){
            return  { 
                        name: "Helton",
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
                            name: "Jorgnho",
                            number: 2,
                            defense:6, 
                            pass:6, 
                            attack:4, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Junior Baiano",
                            number: 3,
                            defense:4, 
                            pass:4, 
                            attack:2, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Odvan",
                            number: 4,
                            defense:6, 
                            pass:8, 
                            attack:5, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Clebson",
                            number: 6,
                            defense:5, 
                            pass:5, 
                            attack:7, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Juninho Paulista",
                            number: 8,
                            defense:8, 
                            pass:9, 
                            attack:7, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Nasa",
                            number: 5,
                            defense:4, 
                            pass:6, 
                            attack:6, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Jorginho Paulista",
                            number: 9,
                            defense:6, 
                            pass:7, 
                            attack:8, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Juninho Pernambucano",
                            number: 10,
                            defense:4, 
                            pass:4, 
                            attack:4, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Euller",
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
        return {"field":field, "keeper":keeper, "name":"Vasco"}
    }
    
    function getPalmeiras(team){
    
         
        function getKeeper(team){
            return  { 
                        name: "Sergio",
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
                                name: "Arce",
                                number: 2,
                                defense:6, 
                                pass:6, 
                                attack:4, 
                                team: team, 
                                sector:1,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Gilmar",
                                number: 3,
                                defense:4, 
                                pass:4, 
                                attack:2, 
                                team: team, 
                                sector:1,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Fernando",
                                number: 4,
                                defense:6, 
                                pass:8, 
                                attack:5, 
                                team: team, 
                                sector:0,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Galeano",
                                number: 6,
                                defense:5, 
                                pass:5, 
                                attack:7, 
                                team: team, 
                                sector:0,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Flavio Luis",
                                number: 8,
                                defense:8, 
                                pass:9, 
                                attack:7, 
                                team: team, 
                                sector:2,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Magrao",
                                number: 10,
                                defense:4, 
                                pass:6, 
                                attack:6, 
                                team: team, 
                                sector:2,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Rodrigo taddei",
                                number: 11,
                                defense:6, 
                                pass:7, 
                                attack:8, 
                                team: team, 
                                sector:3,
                                id: Math.floor(Math.random() * 10000)
                                }); 
                    field.push({ 
                                name: "Tiago Siva",
                                number: 5,
                                defense:4, 
                                pass:4, 
                                attack:4, 
                                team: team, 
                                sector:3,
                                id: Math.floor(Math.random() * 10000)
                                }); 
                    field.push({ 
                                name: "Juninho",
                                number: 7,
                                defense:4, 
                                pass:5, 
                                attack:6, 
                                team: team, 
                                sector:4,
                                id: Math.floor(Math.random() * 10000)
                                });     
                    field.push({ 
                                name: "Tuta",
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
            return {"field":field, "keeper":keeper, "name":"Palmeiras"}

        }   
    return escenario;
}
