function changeAllOpacity(opacity){
    var elems = document.body.getElementsByTagName("*");
    Array.from(elems).forEach((item) => {
        item.style.opacity = opacity;
    });
}


function switchon(tagname){
    var tag = document.getElementById(tagname);
    
    var elems = tag.querySelectorAll("*"); ;
    
    Array.from(elems).forEach((item) => {
        item.style.opacity = "1";
    });
    
    do{
        tag.style.opacity = "1";
        tag = tag.parentElement;
    }while(tag.parentElement != undefined)
        
        
}
function highlight(tagname, showhelp){
    changeAllOpacity("0.6");
    switchon(tagname);    
    if(showhelp == "up"){
        switchon("help")
        document.getElementById("help").style.top = "10%";
    } else if (showhelp = "down") {
        switchon("help")
        document.getElementById("help").style.top = "40%";  
    } 
}
    
var helps =[
    {"helppos":"down", "tag":"field", "text":"Nessa area voce ve o campo. o setor destacado eh onde esta a bola. Se um jogador for driblado fica fora de jogo por alguns segundos."},
    {"helppos":"down", "tag":"holder", "text":"Nessa area voce ve atributos do jogador que esta com a bola. A cor indica o time. Azul significa que a bola esta com voce e os comandos desenhados no canvas serao executados."},
    {"helppos":"down", "tag":"chances", "text":"Nessa area voce ve os tres movimentos com mais chance de dar certo com base nas habilidades do seu jogador e dos adversarios envolvidos."},
    {"helppos":"down", "tag":"terminal", "text":"Nessa area aparecem os lances da partida."},
    {"helppos":"up", "tag":"canvas", "text":"Aqui eh o canvas, onde voce deve desenhar os comandos para passe (8 direcoes), dibre ou chute a gol. <br>Dibre:<img src=\"img/dibre.png\"><br>Chute:<img src=\"img/shot.png\"><br>Passe:<img src=\"img/right.png\"><img src=\"img/leftup.png\"><img src=\"img/leftdown.png\">..."}
];    
    
function autoplay(){ 
    return setInterval(function(){
        var actionresult = tickOpponent(TEAMX);
        if(actionresult != undefined){
            applyActionResult(actionresult);
            processActionResult(actionresult);   
        }
    }, GAME_IA_INTERVAL);    
}
    
var autoplaying = undefined;
    
function hidehelp(){
    
        document.getElementById("help").style.visibility = "hidden";
}    
    
function showhelp(number){
    
    if(!autoplaying){
        autoplaying = autoplay();
    }
    
    if(number >= helps.length) {
        changeAllOpacity("1");
        document.getElementById("help").style.visibility = "hidden";
        clearInterval(autoplaying);
        return false;
    }
    
    var hlp = helps[number];
    highlight(hlp.tag, hlp.helppos);
    document.getElementById("help").innerHTML = hlp.text;
    return true;
}    
        
