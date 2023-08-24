const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");

const start = document.querySelector(".start");
const stopp = document.querySelector(".stop");
const resume = document.querySelector(".resume");
const reset = document.querySelector(".reset");

var minutes = 0;
var seconds =  0;
var milliseconds = 0;
let paused = true;
var flag = 0;

start.addEventListener("click", startCount);
reset.addEventListener("click", resetCount);
stopp.addEventListener("click", stopCount);
resume.addEventListener("click", resumeCount);

function startCount(){
    flag = 1;
    start.disabled = true;
    if(paused === true){
        paused = false;
    }
    setInterval(() => {
        if(paused === false){
            milliseconds += 1;

            if(milliseconds === 100){
                seconds++;
                milliseconds = 0;
            }
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
            if(minutes === 60){
                resetCount();
            }

            minutesEl.textContent = ("00" + minutes).slice(-2);
            secondsEl.textContent = ("00" + seconds).slice(-2);
            millisecondsEl.textContent = milliseconds;
        }
    }, 10);
}

function stopCount(){
    if(paused === false){
        paused = true;
    }
    if(flag != 0){
        start.style.display = 'none';
        resume.style.display = 'flex'
    }
}

function resumeCount(){
    if(paused === true){
        paused = false;
    }
    resume.style.display = 'none';
    start.style.display = 'flex';
}

function resetCount(){ 
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = ("00" + minutes).slice(-2);
    secondsEl.textContent = ("00" + seconds).slice(-2);
    millisecondsEl.textContent = ("00" + milliseconds).slice(-2);
}