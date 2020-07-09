var min = 0;
var sec = 0;
var msec = 0;
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");
var interval;

function timer(){
    msec++;
    msecHead.innerHTML = msec;
   if(msec>=100){
     sec++;
     secHead.innerHTML = sec;
     msec = 0;
   }
   else if (sec>=60){
       min++;
       minHead.innerHTML = min ;
       sec = 0;
   }
}


function start(){
    interval = setInterval(timer,10);
}

function pause(){
    clearInterval(interval);
}

function reset(){
    msec = 00;
    sec = 00;
    min = 00 ;
    msecHead.innerHTML = msec;
    secHead.innerHTML = sec;
    minHead.innerHTML = min;
}