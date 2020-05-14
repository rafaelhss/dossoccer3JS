var su = new SpeechSynthesisUtterance();    
su.lang = "pt";
    
function speak(text){
    su.text = text;
    speechSynthesis.speak(su);
}  

function processActionResult(actionResult){
    console.log(actionResult);
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
function getText(evt, action){
    console.log(action);
    console.log(evt.command)
    console.log(evt.status)
    
    console.log(evt.command == ACTION_PASS)
    console.log(evt.status == ACTION_SUCCESS)
    
    var text = "";
    if (evt.command == ACTION_PASS){
        if(evt.status == ACTION_SUCCESS){
            return "Belo passe de " + evt.actor.name + " pro " + evt.actor2.name + "!";
        }   
    }
}