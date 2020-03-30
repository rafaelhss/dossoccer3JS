function initcmd(){
    document.addEventListener("cmdinput", handleCmd);
}
function handleCmd(evt){
    console.log(evt);
    console.log("vamo");
    
    var cateto1 = evt.detail.maxX - evt.detail.minX;
    var cateto2 = evt.detail.maxY - evt.detail.minY;
    var hip = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));
    var sen = cateto2/hip;
    
    console.log("sen: " + sen)
    
    var sen30 = 1/2;
    var sen60 = Math.sqrt(3)/2;
    var orient = "diag";
    if(sen > sen60){
        orient = "vert";
    } else if  (sen < sen30 ){
        orient = "horiz";
    }
    
    console.log("orient: " + orient);
    
    
}
