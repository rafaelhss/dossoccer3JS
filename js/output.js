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
    
    
    var keepercols = document.getElementsByClassName("keepercol");
    Array.from(keepercols).forEach((el) => {
        el.className = "keepercol sectorunselect";
    });
    
    
    if(Number(ballholder.sector) < 0) {
        if(ballholder.team == TEAMX){
            sector = "keeperx";   
        } else {
            sector = "keepero";    
        }
        var sec = document.getElementById(sector);
        sec.className = "keepercol sectorselect";
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
    
    
    showChances(TEAMX, ballholder);//jogador eh sempre X
            
}

function showselect(playerid){
    hideselect();
    
    document.getElementById("player" + playerid).classList.add("playerselected");
}
function hideselect(){
      [].forEach.call(document.getElementsByClassName("player"),function(player){
        player.classList.remove("playerselected");  
    });  
}


function showChances(team, ballholder){
    
    
    if( team == ballholder.team){
        document.getElementById("chances").style.opacity = "1";
    
        document.getElementById("chance1").innerHTML = Math.trunc(shotProcess(team).chance * 99) + "%";
        document.getElementById("imgchance1").setAttribute("src","img/shot.png");

        document.getElementById("chance2").innerHTML = Math.trunc(dibreProcess(team).chance * 99) + "%";
        document.getElementById("imgchance2").setAttribute("src","img/dibre.png");


       // var chances = [];

        //chances.push({chance: Math.trunc(passProcess(team,1,-1).chance * 99), img: "rightup"});
        
        
        
        
        
        document.getElementById("chanceleftup").innerHTML = Math.trunc(passProcess(team,-1,-1).chance * 99) + "%";
        document.getElementById("chanceup").innerHTML = Math.trunc(passProcess(team,0,-1).chance * 99) + "%";
        document.getElementById("chancerightup").innerHTML = Math.trunc(passProcess(team,1,-1).chance * 99) + "%";
        document.getElementById("chanceright").innerHTML = Math.trunc(passProcess(team,1,0).chance * 99) + "%";
        document.getElementById("chancerightdown").innerHTML = Math.trunc(passProcess(team,1,1).chance * 99) + "%";
        document.getElementById("chancedown").innerHTML = Math.trunc(passProcess(team,0,1).chance * 99) + "%";
        document.getElementById("chanceleftdown").innerHTML = Math.trunc(passProcess(team,-1,1).chance * 99) + "%";
        document.getElementById("chanceleft").innerHTML = Math.trunc(passProcess(team,-1,0).chance * 99) + "%";

/*
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
*/
        //document.getElementById("chance3").innerHTML = chances[2].chance + "%";
       // document.getElementById("imgchance3").setAttribute("src","img/" + chances[2].img + ".png");
    } else {
        document.getElementById("chances").style.opacity = "0.3";
    }
    
    
    
}

function updatescore(evt){
    if(evt.command == ACTION_SHOT){
        if(evt.status == ACTION_SUCCESS){
            var goal = document.getElementById("goal")
            goal.style.display = "block";
            setTimeout(function(){
                document.getElementById("goal").style.display = "none";
            },GAME_GOAL_DUR);
        }
    }
    //soltar animacao
    
    document.getElementById("scorex").innerHTML = game.scorex;
    document.getElementById("scoreo").innerHTML = game.scoreo;
    

    
}

var matchtime = 0;

document.addEventListener("matchtimetick", function(evt){
    var time = Number(evt.detail.time);
    matchtime = Math.round((time * 90) / GAME_DUR_MIN);
    if(matchtime < 0) {
        matchtime = 0;
    }
    document.getElementById("matchtime").innerHTML = matchtime + "'";
    updateDownPlayers();
});

function updateDownPlayers(){
    [].forEach.call(document.getElementsByClassName("player"),function(player){
        player.classList.remove("playerdown");        
    });
    game.playersdown.forEach(function(player){
        document.getElementById("player" + player.id).classList.add("playerdown");        
    });
};

function updatefieldsectors(){
    
    var sectors = document.getElementsByClassName("sector");
    Array.from(sectors).forEach((el) => {
        console.log( el.firstChild)
        el.firstChild.innerHTML = "";
    });
    
    
    
    game.field.forEach(function(player, index){
        
        var secname = "sector" + player.sector;
        var sector = document.getElementById(secname).firstChild;
        //var tag = "<ion-icon class=\"@@CLASS@@\" name=\"person\"></ion-icon>";
        var tag = "<span class=\"player @@CLASS@@\" name=\"person\" id=\"player"+ player.id +"\">"+ player.number +"</span>";
        
        if((index > 0) && ((index % 2) == 0)){
            tag += "</div><div>"
        }
        
        
        if(player.team == TEAMX){
           tag = tag.replace("@@CLASS@@","playerx");
        } else {
            tag = tag.replace("@@CLASS@@","playero");
        }
        
        sector.innerHTML = sector.innerHTML + tag;
               
    })
}


function processActionResult(actionResult){
    
    updateField(game.ballholder);

    if(actionResult.events){
        actionResult.events.forEach(function(evt){
            
            updatescore(evt);

            var currentdate = new Date(); 
            
            if(evt.command == ACTION_KICKOFF){
                if(evt.detail){
                    if(evt.detail[3]){
                        matchtime = evt.detail[3];
                    } 
                }
            }
            
            var datetime = matchtime + "'";

            var spantag = "<span class=\"actionteamx\">";
            if(actionResult.team == TEAMO) {
                spantag = "<span class=\"actionteamo\">";
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
    
    function getteamname(team){
        if(team == TEAMX){
            return game.playerteamname;
        } else {
            return game.opposingteamname;
        }
    }
    
    var txt = "estou sem palavra";
    
    var text = "";
    if (evt.command == ACTION_PASS){
        if(evt.status == ACTION_SUCCESS){
            var rand = Math.floor(Math.random()*5);
            switch (rand) {
                case 0: txt = "Belo passe de " + evt.actor.name + " pro " + evt.actor2.name + "!";
                break;
                case 1: txt = "Vai trabalhando a jogada o " +getteamname(evt.actor.team) + ", " + evt.actor2.name + " recebe o passe de " + evt.actor.name;
                break;
                case 2: txt = evt.actor.name + " toca para " + evt.actor2.name; 
                break;
                case 3: txt = evt.actor2.name + " recebe de " + evt.actor.name;
                break;
                case 4: txt = "Troca de passes entre " + evt.actor.name + " e " + evt.actor2.name;
                break;
            }
        }   
    
    
       // console.log("evt.detail: " + evt.detail);
        if(evt.detail){
            evt.detail.forEach(function(dtl){
                if(dtl == ACTION_PASS_INTERCEPTED){
                    var rand = Math.floor(Math.random()*4);
                    switch (rand) {
                        case 0: txt = evt.actor.name + " do " + getteamname(evt.actor.team) + " tenta o passe mas " + evt.actor2.name + " intercepta! Bola do " + getteamname(getOpposingTeam(evt.actor.team));
                        break;
                        case 1: txt = evt.actor2.name +  " esta um gigante na marcacao. o passe de " + evt.actor.name + " do " + getteamname(evt.actor.team) + " nao chega ao seu destino";
                        break;
                        case 2: txt = "Mais um passe interceptado por " + evt.actor2.name + ", frustrando os esforcos de " + evt.actor.name + " do " + getteamname(evt.actor.team);
                        break;
                        case 3: txt = "Esse " + evt.actor.name + ", nao acerta uma! a bola para nos pes de " + evt.actor2.name + " do " + getteamname(getOpposingTeam(evt.actor.team));
                        break;
                                
                    }                    
                }
                if(dtl == ACTION_PASS_NOTEAMATE){
                    txt = "A bola vai direto para os pés de " + evt.actor2.name + ". Nenhum jogador do " + getteamname(evt.actor.team) + " nesse setor.";
                }
                if(dtl == ACTION_PASS_NOBODY){
                    txt = "Nenhum jogador nessa area do campo. " + evt.actor.name + " desperdica a posse de bola.";
                }
                if(dtl == ACTION_PASS_OFFBOUNDS){
                    txt = "a tentativa de passe de " + evt.actor.name + " vai para a lateral. " + getteamname(evt.actor.team) + " perde a posse de bola.";
                }
            });
        }
    }
    
    if(evt.command == ACTION_SHOT){
        if(evt.status == ACTION_SUCCESS){
            txt = "Que Gooooool de " + evt.actor.name + " pro " + getteamname(evt.actor.team) + "!";
        } else {
            var rand = Math.floor(Math.random()*5);
            switch (rand) {
                case 0: txt = "Deeeeefende o chute! O " + evt.actor2.name + " ta pegando tudo hoje!";
                break;
                case 1: txt = evt.actor.name +  " bate forte mas " + evt.actor2.name + " bem posicionado faz a defesa";
                break;
                case 2: txt = "Milaaagre de " + evt.actor2.name + " na batida colocada de " + evt.actor.name;
                break;
                case 3: txt = "Pra fora! A tentativa de " + evt.actor.name + " vai pelo canto direto da meta";
                break;
                case 4: txt = "Na traaave! Por pouco " + evt.actor.name + " nao marca para o " + getteamname(evt.actor.team);
                break;        
            }  
            
        }
    }
    
    if(evt.command == ACTION_KICKOFF){
        if(evt.detail){
            if(evt.detail[2]){
                txt = evt.detail[2];
            } else {
                txt = "Vai. comecar a peleja! Hoje joga " + evt.detail[0] + " contra " + evt.detail[1] + "!";
            }
        }
    }
    
    if(evt.command == ACTION_GAMEOVER){
        txt = "Nao ha tempo pra mais naaaada!";
    }    
    
    if(evt.command == ACTION_DIBRE){
        if(evt.status == ACTION_SUCCESS){
            var rand = Math.floor(Math.random()*5);
            switch (rand) {
                case 0: txt = "oooooooollleeeee! " + evt.actor.name + " deixa " + evt.actor2.name + " no chao!";
                break;
                case 1: txt = evt.actor.name +  " sassarica de um lado pro outro e dibra " + evt.actor2.name;
                break;
                case 2: txt = "Corte na habilidade de " + evt.actor.name + " para superar a marcacao de " + evt.actor2.name;
                break;
                case 3: txt = "Na jogada individual " + evt.actor.name + " neutraliza " + evt.actor2.name;
                break;
                case 4: txt = "Por debaixo das canetas " + evt.actor.name + " deixa " + evt.actor2.name + " na saudade";
                break; 
            }
            
        } else {
            if(evt.detail){
                evt.detail.forEach(function(dtl){
                    if(dtl == ACTION_DIBRE_NODEFENDER){
                        txt = evt.actor.name + " faz ali sua gracinha pra torcida, sem nenhu adversario por perto...";
                    }
                });
            } else {
                var rand = Math.floor(Math.random()*4);
                switch (rand) {
                    case 0:  txt = "Esse " + evt.actor.name + " ta de sacanagem. Foi fazer uma gracinha na frente do " + evt.actor2.name + " e perdeu a bola!";
                    break;
                    case 1: txt = evt.actor.name +  " se atrapalha com a tentativa de dibre e perde a posse de bola pra " + evt.actor2.name;
                    break;
                    case 2: txt = "Perde a bola " + evt.actor.name + " no bote de " + evt.actor2.name;
                    break;
                    case 3: txt = "Faz o simples, " + evt.actor.name + "!! perde a bola pro" + evt.actor2.name;
                    break;
                }
            }
        }
    }
    
    if(txt == "estou sem palavra") {console.log(evt)}
    return txt;
}