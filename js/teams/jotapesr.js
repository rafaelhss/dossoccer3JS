function getJPSr(team){
    
         
function getKeeper(team){
    return  { 
                name: "Thomas",
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
                        name: "Frubbao",
                        number: 2,
                        defense:6, 
                        pass:6, 
                        attack:4, 
                        team: team, 
                        sector:1,
                        id: Math.floor(Math.random() * 10000)
                        });
            field.push({ 
                        name: "Leite",
                        number: 3,
                        defense:4, 
                        pass:4, 
                        attack:2, 
                        team: team, 
                        sector:1,
                        id: Math.floor(Math.random() * 10000)
                        });
            field.push({ 
                        name: "Remo",
                        number: 4,
                        defense:6, 
                        pass:8, 
                        attack:5, 
                        team: team, 
                        sector:0,
                        id: Math.floor(Math.random() * 10000)
                        });
            field.push({ 
                        name: "IgorTog",
                        number: 6,
                        defense:5, 
                        pass:5, 
                        attack:7, 
                        team: team, 
                        sector:0,
                        id: Math.floor(Math.random() * 10000)
                        });
            field.push({ 
                        name: "Rosca",
                        number: 8,
                        defense:8, 
                        pass:9, 
                        attack:7, 
                        team: team, 
                        sector:2,
                        id: Math.floor(Math.random() * 10000)
                        });
            field.push({ 
                        name: "Fred",
                        number: 10,
                        defense:4, 
                        pass:6, 
                        attack:6, 
                        team: team, 
                        sector:2,
                        id: Math.floor(Math.random() * 10000)
                        });
            field.push({ 
                        name: "Brunao",
                        number: 11,
                        defense:6, 
                        pass:7, 
                        attack:8, 
                        team: team, 
                        sector:3,
                        id: Math.floor(Math.random() * 10000)
                        }); 
            field.push({ 
                        name: "kaka",
                        number: 5,
                        defense:4, 
                        pass:4, 
                        attack:4, 
                        team: team, 
                        sector:3,
                        id: Math.floor(Math.random() * 10000)
                        }); 
            field.push({ 
                        name: "Tokin",
                        number: 7,
                        defense:4, 
                        pass:5, 
                        attack:6, 
                        team: team, 
                        sector:4,
                        id: Math.floor(Math.random() * 10000)
                        });     
            field.push({ 
                        name: "Marcelao",
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
    return {"field":field, "keeper":keeper, "name":"Jotape Senior"}
    
}   