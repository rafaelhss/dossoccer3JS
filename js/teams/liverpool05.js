function getLiverpoolMilan05(){
    
    var escenario = {
        "year":"2005",
        "playerteamname":"Liverpool",
        "opposingteamname":"Milan",
        "scorex":0,
        "scoreo":3,
        "matchtime":45,
        "txt":"Liverpool toma um gol no primeiro minuto de jogo, se abala e leva mais dois. Tem 45 minutos para reverter e conquistar a Europa.",
        "txtloss":"Infelizmente o Liverpool nao teve forca para reagir e a camisa do Milan pesou.",
        "txtdraw":"O Empate leva a decisao da Champions para os penaltis. Sera que o Liverpool saira da fila apos vinte anos ou morrera na praia?",
        "txtwin":"Liverpool consegue uma virada historica e leva a Champions depois de duas decadas!",
        "teamx":getLiverpool(TEAMX),
        "teamo":getMilan(getOpposingTeam(TEAMX))
    }
    
    
    function getLiverpool(team){
    
        function getKeeper(team){
            return  { 
                        name: "Dudek",
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
                            name: "Finnan",
                            number: 2,
                            defense:6, 
                            pass:6, 
                            attack:4, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Carragher",
                            number: 3,
                            defense:4, 
                            pass:4, 
                            attack:2, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Hyypia",
                            number: 4,
                            defense:6, 
                            pass:8, 
                            attack:5, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Traore",
                            number: 6,
                            defense:5, 
                            pass:5, 
                            attack:7, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Alonso",
                            number: 8,
                            defense:8, 
                            pass:9, 
                            attack:7, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Luis Garcia",
                            number: 5,
                            defense:4, 
                            pass:6, 
                            attack:6, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Gerrard",
                            number: 9,
                            defense:6, 
                            pass:7, 
                            attack:8, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Riise",
                            number: 10,
                            defense:4, 
                            pass:4, 
                            attack:4, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Kewell",
                            number: 7,
                            defense:4, 
                            pass:5, 
                            attack:6, 
                            team: team, 
                            sector:4,
                            id: Math.floor(Math.random() * 10000)
                            });     
                field.push({ 
                            name: "Baros",
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
        return {"field":field, "keeper":keeper, "name":"Liverpool"}
    }
    
    function getMilan(team){
    
         
        function getKeeper(team){
            return  { 
                        name: "Dida",
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
                                name: "Cafu",
                                number: 2,
                                defense:6, 
                                pass:6, 
                                attack:4, 
                                team: team, 
                                sector:1,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Stam",
                                number: 3,
                                defense:4, 
                                pass:4, 
                                attack:2, 
                                team: team, 
                                sector:1,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Nesta",
                                number: 4,
                                defense:6, 
                                pass:8, 
                                attack:5, 
                                team: team, 
                                sector:0,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Maldini",
                                number: 6,
                                defense:5, 
                                pass:5, 
                                attack:7, 
                                team: team, 
                                sector:0,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Pirlo",
                                number: 8,
                                defense:8, 
                                pass:9, 
                                attack:7, 
                                team: team, 
                                sector:2,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Gattuso",
                                number: 10,
                                defense:4, 
                                pass:6, 
                                attack:6, 
                                team: team, 
                                sector:2,
                                id: Math.floor(Math.random() * 10000)
                                });
                    field.push({ 
                                name: "Seedorf",
                                number: 11,
                                defense:6, 
                                pass:7, 
                                attack:8, 
                                team: team, 
                                sector:3,
                                id: Math.floor(Math.random() * 10000)
                                }); 
                    field.push({ 
                                name: "Kaka",
                                number: 5,
                                defense:4, 
                                pass:4, 
                                attack:4, 
                                team: team, 
                                sector:3,
                                id: Math.floor(Math.random() * 10000)
                                }); 
                    field.push({ 
                                name: "Shevchenko",
                                number: 7,
                                defense:4, 
                                pass:5, 
                                attack:6, 
                                team: team, 
                                sector:4,
                                id: Math.floor(Math.random() * 10000)
                                });     
                    field.push({ 
                                name: "Crespo",
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
            return {"field":field, "keeper":keeper, "name":"Milan"}

        }   
    return escenario;
}
