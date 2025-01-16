// script.js
let timer;
let seconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const lapsList = document.getElementById("laps");

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`; // Corrected this line to use template literals
}

function updateTime() {
  timeDisplay.textContent = formatTime(seconds);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateTime();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateTime();
  lapsList.innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = document.createElement("li");
    lapTime.textContent = `Lap ${lapsList.childElementCount + 1}: ${formatTime(seconds)}`; // Corrected this line
    lapsList.appendChild(lapTime);
  }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

updateTime(); // Initial update to display "00:00:00"
