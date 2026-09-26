const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  hours.textContent = h < 10 ? "0" + h : h;
  minutes.textContent = m < 10 ? "0" + m : m;
  seconds.textContent = s < 10 ? "0" + s : s;
}

updateClock();
setInterval(updateClock, 1000);
