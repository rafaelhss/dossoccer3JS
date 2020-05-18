var su = new SpeechSynthesisUtterance(); 
su.lang = "pt";
    
function speak(text){
    su.text = text;
    speechSynthesis.speak(su);
}  

function processActionResult(actionResult){
    console.log(actionResult);
    if(actionResult.events){
        actionResult.events.forEach(function(evt){

            var currentdate = new Date(); 
            var datetime = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

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

            document.getElementById("actionmsgtable").innerHTML = datetime +
               spantag +  msg + "</span>" + 
                sucesstag + 
                "<br>" + document.getElementById("actionmsgtable").innerHTML 
        })
    }
} 
function getText(evt, action){
    var txt = "estou sem palavra";
    console.log(action);
    console.log(evt);

    var text = "";
    if (evt.command == ACTION_PASS){
        if(evt.status == ACTION_SUCCESS){
            txt = "Belo passe de " + evt.actor.name + " pro " + evt.actor2.name + "!";
        }   
    
    
        console.log("evt.detail: " + evt.detail);
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