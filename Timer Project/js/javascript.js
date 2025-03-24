var hour = 0;
var minutes = 0;
var seconds = 0;
var a = 0;

var timer1;
var flag_start = false;




function watch() {
    let b = "timer";
    seconds = seconds + 1;



    if (seconds > 59) {
        minutes = minutes + 1;
        seconds = 0;
    }
    if (minutes > 59) {
        hour = hour + 1;
        m = 0;
    }
    if (hour > 23) {
        hour = 0;

    }
    document.getElementById("div1").innerHTML = hour + ":" + minutes + ":" + seconds;

}




function start() {
    if (flag_start == false) {
        flag_start = true;
        timer1 = setInterval(watch, 1000)
        document.getElementById("btn_start").disabled = true;
        document.getElementById("btn_stop").disabled = false;
        document.getElementById("btn_reset").disabled = false;

    }
}

function stop() {
    clearInterval(timer1);
    flag_start = false;



    document.getElementById("btn_start").disabled = false;
    document.getElementById("btn_stop").disabled = true;
}



function reset() {
    stop();
    seconds = 0;
    minutes = 0;
    hour = 0;
    document.getElementById("div1").innerHTML = '0:0:0';
    document.getElementById("btn_start").disabled = false;
    document.getElementById("btn_stop").disabled = true;
    document.getElementById("btn_reset").disabled = true;
    flag_start = false;
}