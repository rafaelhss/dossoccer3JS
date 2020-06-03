function getJPJr(team){
    

    function getKeeper(team){
        return  { 
                    name: "Panda",
                    number: 1,
                    pass: 10,
                    attack:0,
                    defense:6, 
                    team: team, 
                    sector:-2,
                    id: Math.floor(Math.random() * 10000)                            
                }
    }

    function getPlayers(team){
                var field = [];

                field.push({ 
                            name: "Roma",
                            number: 2,
                            defense:6, 
                            pass:6, 
                            attack:4, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Davi",
                            number: 3,
                            defense:4, 
                            pass:4, 
                            attack:2, 
                            team: team, 
                            sector:0,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Tuca",
                            number: 4,
                            defense:6, 
                            pass:8, 
                            attack:5, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Oreia",
                            number: 6,
                            defense:5, 
                            pass:5, 
                            attack:7, 
                            team: team, 
                            sector:1,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Junilza",
                            number: 8,
                            defense:8, 
                            pass:9, 
                            attack:7, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Renato Amaral",
                            number: 10,
                            defense:4, 
                            pass:6, 
                            attack:6, 
                            team: team, 
                            sector:2,
                            id: Math.floor(Math.random() * 10000)
                            });
                field.push({ 
                            name: "Gut",
                            number: 11,
                            defense:6, 
                            pass:7, 
                            attack:8, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Gutoca",
                            number: 5,
                            defense:4, 
                            pass:4, 
                            attack:4, 
                            team: team, 
                            sector:3,
                            id: Math.floor(Math.random() * 10000)
                            }); 
                field.push({ 
                            name: "Bolinha",
                            number: 7,
                            defense:4, 
                            pass:5, 
                            attack:6, 
                            team: team, 
                            sector:4,
                            id: Math.floor(Math.random() * 10000)
                            });     
                field.push({ 
                            name: "Rafinha",
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
    return {"field":field, "keeper":keeper, "name":"Jotape Junior"}
}
