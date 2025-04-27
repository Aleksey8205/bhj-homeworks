const holeHasMole = document.querySelector(".hole_has-mole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let parseDead = parseInt(dead.textContent);
let parseLost = parseInt(lost.textContent);

function getHole(index) {
  return document.getElementById(`hole${index}`);
}
for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.addEventListener("click", function (event) {
    if (event.target.classList.contains("hole_has-mole")) {
      parseDead++;
      dead.textContent = parseDead.toString();
    } else {
      parseLost++;
      lost.textContent = parseLost.toString();
    }

    if (parseLost >= 5) {
      alert("Вы проиграли!");
      location.reload();
    }

    if (parseDead >= 5) {
      alert("Вы выиграли!");
      location.reload();
    }
  });
}
