const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const sec = document.querySelector('.secs');
const min = document.querySelector('.mins');
let flag = false;

function startStopwatch() {
 if(!flag) initialDate = new Date;
}

function getTime() {
  let currentDate = new Date;
  timer = new Date (currentDate - initialDate);
  seconds = timer.getSeconds();
  minutes = timer.getMinutes();

  if(seconds < 1){
    seconds = '0' + seconds;
  }
  if (minutes < 1){
    minutes = '0' + minutes;
  }
}

function counter() {
  getTime();
  sec.innerHTML = seconds;
  min.innerHTML = minutes;
}

function displayTimer() {
  timerId = setInterval(counter, 100);
}

function stopTimer() {
  clearInterval(timerId);
  getTime();
  flag = true;
}

function resetTimer() {
  flag = false;
  setInterval(timerId);
  min.innerHTML = '0';
  sec.innerHTML = '0';
}

start.addEventListener('click', startStopwatch);
start.addEventListener('click', displayTimer);
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer);

