var su = new SpeechSynthesisUtterance(); 
su.lang = "pt";
    
function speak(text){
    if(sound && !speechSynthesis.speaking){
        su.text = text;
        //speechSynthesis.speak(su);    
        
    }
    
}  


function updateField(ballholder){
    var sector = "";
    
    var sectors = document.getElementsByClassName("sector");
    Array.from(sectors).forEach((el) => {
        el.className = "sector sectorunselect";
    });
    
    
    var keeperrows = document.getElementsByClassName("keeperrow");
    Array.from(keeperrows).forEach((el) => {
        el.className = "keeperrow sectorunselect";
    });
    
    
    if(Number(ballholder.sector) < 0) {
        if(ballholder.team == TEAMX){
            sector = "keeperx";   
        } else {
            sector = "keepero";    
        }
        var sec = document.getElementById(sector);
        sec.className = "keeperrow sectorselect";
    } else {
            switch (Number(ballholder.sector)) {
              case  0:
                sector = "sector0";
                break;
              case 1:
                sector = "sector1";
                break;
              case 2:
                sector = "sector2";
                break;
              case 3:
                sector = "sector3";
                break;
              case 4:
                sector = "sector4";
                break;
              case 5:
                sector = "sector5";
                break;
            }
        var sec = document.getElementById(sector);
        sec.className = "sector sectorselect";
    }
            
    var holder = document.getElementById("holder");
    if(ballholder.team == TEAMX) {
        holder.className = "holderx";   
    } else {
        holder.className = "holdero";           
    } 
    
    document.getElementById("name").innerHTML = ballholder.name + " " + ballholder.number;
    document.getElementById("att").innerHTML = Number(ballholder.attack);
    document.getElementById("def").innerHTML = Number(ballholder.defense);
    document.getElementById("pass").innerHTML = Number(ballholder.pass);
    
    
    showChances(TEAMX, ballholder.team);//jogador eh sempre X
            
}

function showChances(team, ballholderteam){
    
    var chances = [];
    
    chances.push({chance: Math.trunc(passProcess(team,-1,-1).chance * 99), img: "leftup"});
    chances.push({chance: Math.trunc(passProcess(team,0,-1).chance * 99), img: "up"});
    chances.push({chance: Math.trunc(passProcess(team,1,-1).chance * 99), img: "rightup"});
    chances.push({chance: Math.trunc(passProcess(team,1,0).chance * 99), img: "right"});
    chances.push({chance: Math.trunc(passProcess(team,1,1).chance * 99), img: "rightdown"});
    chances.push({chance: Math.trunc(passProcess(team,0,1).chance * 99), img: "down"});
    chances.push({chance: Math.trunc(passProcess(team,-1,1).chance * 99), img: "leftdown"});
    chances.push({chance: Math.trunc(passProcess(team,-1,0).chance * 99), img: "left"});
    chances.push({chance: Math.trunc(dibreProcess(team).chance * 99), img: "dibre"});
    chances.push({chance: Math.trunc(shotProcess(team).chance * 99), img: "shot"});
    
    function compare( a, b ) {
      if ( a.chance < b.chance ){
        return 1;
      }
      if ( a.chance > b.chance ){
        return -1;
      }
      return 0;
    }
    chances.sort( compare );
    
    document.getElementById("chance1").innerHTML = chances[0].chance + "%";
    document.getElementById("imgchance1").setAttribute("src","img/" + chances[0].img + ".png");
    
    document.getElementById("chance2").innerHTML = chances[1].chance + "%";
    document.getElementById("imgchance2").setAttribute("src","img/" + chances[1].img + ".png");
    
    document.getElementById("chance3").innerHTML = chances[2].chance + "%";
    document.getElementById("imgchance3").setAttribute("src","img/" + chances[2].img + ".png");
    
    
    if( team == ballholderteam){
        document.getElementById("chances").style.opacity = "1";
    } else {
        document.getElementById("chances").style.opacity = "0.3";
    }
}

function updatescore(evt){
  /*  if(evt.command == ACTION_SHOT){
        if(evt.status == ACTION_SUCCESS){
            if(evt.actor.team == TEAMX){
                document.getElementById("scorex").style.opacity     
            }
            
        }
    }*/
    //soltar animacao
    
    document.getElementById("scorex").innerHTML = game.scorex;
    document.getElementById("scoreo").innerHTML = game.scoreo;
    
}
var matchtime = 90;

document.addEventListener("matchtimetick", function(evt){
    console.log("got");
    var time = Number(evt.detail.time);
    matchtime = Math.round((time * 90) / GAME_DUR_MIN);
    if(matchtime < 0) {
        matchtime = 0;
    }
    document.getElementById("matchtime").innerHTML = matchtime + "'";
});


function processActionResult(actionResult){
    
    updateField(game.ballholder);

    if(actionResult.events){
        actionResult.events.forEach(function(evt){
            
            updatescore(evt);

            var currentdate = new Date(); 
            var datetime = matchtime + "'";

            var spantag = "<span class=\"teamx\">";
            if(actionResult.team == TEAMO) {
                spantag = "<span class=\"teamo\">";
            }

            var sucesstag = "";
            if(actionResult.success) {
                sucesstag = "<img width=\"8px\" height=\"8px\" src=\"https://www.clipartsfree.net/vector/small/49491-small-green-dot-icon.png\">";
            }

            msg = getText(evt, actionResult);
            speak(msg);
            
            document.getElementById("actionmsgtable6").innerHTML = document.getElementById("actionmsgtable5").innerHTML;
            
            document.getElementById("actionmsgtable5").innerHTML = document.getElementById("actionmsgtable4").innerHTML;
            
            document.getElementById("actionmsgtable4").innerHTML = document.getElementById("actionmsgtable3").innerHTML;
            
            document.getElementById("actionmsgtable3").innerHTML = document.getElementById("actionmsgtable2").innerHTML;
            
            document.getElementById("actionmsgtable2").innerHTML = document.getElementById("actionmsgtable1").innerHTML;
            
            document.getElementById("actionmsgtable1").innerHTML = datetime + "  " +
               spantag +  msg + "</span>" + 
                sucesstag; 
        })
    }
} 
function getText(evt, action){
    var txt = "estou sem palavra";
    
    var text = "";
    if (evt.command == ACTION_PASS){
        if(evt.status == ACTION_SUCCESS){
            txt = "Belo passe de " + evt.actor.name + " pro " + evt.actor2.name + "!";
        }   
    
    
       // console.log("evt.detail: " + evt.detail);
        if(evt.detail){
            evt.detail.forEach(function(dtl){
                if(dtl == ACTION_PASS_INTERCEPTED){
                    txt = evt.actor.name + " do " + evt.actor.team + " tenta o passe mas " + evt.actor2.name + " intercepta! Bola do time " + evt.actor.team ;
                }
                if(dtl == ACTION_PASS_NOTEAMATE){
                    txt = "A bola vai direto para os pés de " + evt.actor2.name + ". Nenhum jogador do " + evt.actor.team + " nesse setor.";
                }
                if(dtl == ACTION_PASS_NOBODY){
                    txt = "Nenhum jogador nessa area do campo. " + evt.actor.name + " desperdiça a posse de bola.";
                }
                if(dtl == ACTION_PASS_OFFBOUNDS){
                    txt = "a tentativa de passe de " + evt.actor.name + " vai para a lateral. O time " + evt.actor.team + " perde a posse de bola.";
                }
            });
        }
    }
    
    if(evt.command == ACTION_SHOT){
        if(evt.status == ACTION_SUCCESS){
            txt = "Que Gô ô ô ô ô ô ô ô ô ôôôôôôôôôl!! Gôôôôôôl de " + evt.actor.name + " pro " + evt.actor.team + "!";
        } else {
            txt = "Dêêê ê ê êê ê ê ê êêêêfende o chute! O " + evt.actor2.name + " ta pegando tudo hoje!";
        }
    }
    
    if(evt.command == ACTION_KICKOFF){
        var txtteams = "";
        if(evt.detail){
            txtteams = "Hoje joga " + evt.detail[0] + " contra " + evt.detail[1] + "!";
        }
        txt = "Vai comecar a peleja!" + txtteams;
    }
    
    if(evt.command == ACTION_GAMEOVER){
        txt = "Nao ha tempo pra mais na a a a a da!";
    }    
    
    if(evt.command == ACTION_DIBRE){
        if(evt.status == ACTION_SUCCESS){
            txt = "ô ô ô ô ô lê ê ê!! " + evt.actor.name + " deixa " + evt.actor2.name + " no chao!";
        } else {
            if(evt.detail){
                evt.detail.forEach(function(dtl){
                    if(dtl == ACTION_DIBRE_NODEFENDER){
                        txt = evt.actor.name + " faz ali sua gracinha pra torcida, sem nenhu adversario por perto...";
                    }
                });
            } else {
                txt = "Esse " + evt.actor.name + " ta de sacanagem. Foi fazer uma gracinha na frente do " + evt.actor2.name + " e perdeu a bola!";    
            }
            
        }
    }
    return txt;
}