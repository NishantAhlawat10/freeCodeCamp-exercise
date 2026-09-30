const hours = document.getElementsByClassName("hours")[0];
const minutes = document.getElementsByClassName("minutes")[0];
const seconds = document.getElementsByClassName("seconds")[0];
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let secondCount = 0;
let intervalId = null;

function updateTime() {
  secondCount++;
  const scs = secondCount % 60;
  const hrs = Math.floor(secondCount / 3600);
  const mins = Math.floor(secondCount / 60) % 60;

  hours.textContent = hrs < 10 ? "0" + hrs : hrs;
  minutes.textContent = mins < 10 ? "0" + mins : mins;
  seconds.textContent = scs < 10 ? "0" + scs : scs;
}

startButton.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(updateTime, 1000);
  }
});

stopButton.addEventListener("click", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

resetButton.addEventListener("click", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  secondCount = 0;
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
});
