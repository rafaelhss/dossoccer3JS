var getchances = function(team){
        return [(passProcess(team,-1,-1).chance * 100).toFixed(2),
                      (passProcess(team,0,-1).chance * 100).toFixed(2),
                      (passProcess(team,1,-1).chance * 100).toFixed(2),
                      (passProcess(team,-1,0).chance * 100).toFixed(2),
                      
                      (dibreProcess(team).chance * 100).toFixed(2),
                      
                      (passProcess(team,1,0).chance * 100).toFixed(2),
                      (passProcess(team,-1,1).chance * 100).toFixed(2),
                      (passProcess(team,0,1).chance * 100).toFixed(2),
                      (passProcess(team,1,1).chance * 100).toFixed(2),
                      
                      (shotProcess(team,-1,0).chance * 100).toFixed(2)
                      ]
    }

var getActions = function(team){
    return [passProcess(team,-1,-1),
            passProcess(team,0,-1),
            passProcess(team,1,-1),
            passProcess(team,-1,0),

            dibreProcess(team),

            passProcess(team,1,0),
            passProcess(team,-1,1),
            passProcess(team,0,1),
            passProcess(team,1,1),

            shotProcess(team,-1,0)
          ]
}
