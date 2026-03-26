const deadSpan = document.getElementById("dead");
const lostSpan = document.getElementById("lost");

let deadCount = 0;
let lostCount = 0;

function getHole(index) {
  return document.getElementById("hole" + index);
}

function updateStatus() {
  deadSpan.textContent = deadCount;
  lostSpan.textContent = lostCount;
}

function handleClick(event) {
  if (event.target.classList.contains("hole_has-mole")) {
    deadCount++;
    alert("Попал! +1 очко.");
  } else {
    lostCount++;
    alert("Промах! +1 к промахам.");
  }

  updateStatus();

  if (deadCount >= 10) {
    alert("Победа! Вы убили 10 кротов!");
    deadCount = 0;
    lostCount = 0;
  } else if (lostCount >= 5) {
    alert("Поражение! Слишком много промахов.");
    deadCount = 0;
    lostCount = 0;
  }
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  if (hole) {
    hole.onclick = handleClick;
  }
}
