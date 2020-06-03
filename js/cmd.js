function initcmd(){
    startup();
    document.addEventListener("rawcmdinput", handleCmd);
}
function handleCmd(evt){
     
   /* 
    console.log("startX: " + evt.detail.startX 
               + " endX: " + evt.detail.endX
               + " minX: " + evt.detail.minX 
               + " maxX: " + evt.detail.maxX)
    
    console.log("startY: " + evt.detail.startY 
               + " endY: " + evt.detail.endY
               + " minY: " + evt.detail.minY 
               + " maxY: " + evt.detail.maxY)
    
    */
    
    //Kick V 
    if(((evt.detail.startY > evt.detail.endY) && (evt.detail.startY < evt.detail.maxY)) ||
       ((evt.detail.startY < evt.detail.endY) && (evt.detail.startY > evt.detail.minY))){
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!")
        
        // V + > = digre
        if(((evt.detail.startX < evt.detail.endX) && (evt.detail.startX > evt.detail.minX)) ||
           ((evt.detail.startX > evt.detail.endX) && (evt.detail.startX < evt.detail.maxX))){
            console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@>>>>>>>>>>>>>")
            var event = new CustomEvent("cmdinput", { "detail": {"cmd": "dibre"}});
            document.dispatchEvent(event);
        } else {
            var event = new CustomEvent("cmdinput", { "detail": {"cmd": "shot"}});
            document.dispatchEvent(event);
        }
    } else {
        // reto
        var cateto1 = evt.detail.maxX - evt.detail.minX;
        var cateto2 = evt.detail.maxY - evt.detail.minY;
        var hip = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));
        var sen = cateto2/hip;

        var sen30 = 1/2;
        var sen60 = Math.sqrt(3)/2;

        var axisx = -1;
        var axisy = -1;
     
        if(evt.detail.incrX) {
            axisx = 1;
        }

        if(evt.detail.incrY) {
            axisy = 1;
        }

        if(sen > sen60){ //vertical
            axisx = 0;
        } else if  (sen < sen30 ){
            axisy = 0;
        }

        var event = new CustomEvent("cmdinput", { "detail": {"cmd": "pass", "axisx": axisx, "axisy": axisy}});
        document.dispatchEvent(event);
    }
}
