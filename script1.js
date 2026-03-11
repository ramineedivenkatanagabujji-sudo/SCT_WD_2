let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateTime(){

seconds++;

if(seconds == 60){
seconds = 0;
minutes++;
}

if(minutes == 60){
minutes = 0;
hours++;
}

let h = String(hours).padStart(2,'0');
let m = String(minutes).padStart(2,'0');
let s = String(seconds).padStart(2,'0');

document.getElementById("display").innerText = h + ":" + m + ":" + s;

}

function startTimer(){

if(timer !== null) return;

timer = setInterval(updateTime,1000);

}

function pauseTimer(){

clearInterval(timer);
timer = null;

}

function resetTimer(){

clearInterval(timer);

seconds = 0;
minutes = 0;
hours = 0;

timer = null;

document.getElementById("display").innerText = "00:00:00";

document.getElementById("laps").innerHTML = "";

}

function lapTimer(){

let lapTime = document.getElementById("display").innerText;

let li = document.createElement("li");

li.innerText = "Lap: " + lapTime;

document.getElementById("laps").appendChild(li);

}