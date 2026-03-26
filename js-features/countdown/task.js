let totalSeconds = 59;
const timerElement = document.getElementById("timer");
function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

const interval = setInterval(() => {
  timerElement.textContent = formatTime(totalSeconds);
  if (totalSeconds <= 0) {
    clearInterval(interval);
    alert("Вы победили в конкурсе!");
    timerElement.textContent = "00:00:00";
  }

  totalSeconds--;
}, 1000);
