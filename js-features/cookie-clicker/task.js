const cookieImg = document.getElementById("cookie");
const counterEl = document.getElementById("clicker__counter");
const speedOutput = document.getElementById("click_speed");

let clickCount = 0;
let isShrinked = false;
let lastClickTime = null;

cookieImg.addEventListener("click", () => {
  clickCount++;
  counterEl.textContent = clickCount;

  isShrinked = !isShrinked;
  if (isShrinked) {
    cookieImg.style.width = "150px";
    cookieImg.style.height = "150px";
  } else {
    cookieImg.style.width = "200px";
    cookieImg.style.height = "200px";
  }

  const currentTime = new Date().getTime();

  if (lastClickTime !== null) {
    const timeDiffSec = (currentTime - lastClickTime) / 1000;

    if (timeDiffSec > 0) {
      const speed = Math.round(1 / timeDiffSec);
      speedOutput.textContent = `Скорость кликов: ${speed} кликов/сек`;
    }
  }

  lastClickTime = currentTime;
});
