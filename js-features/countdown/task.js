const timer = document.getElementById("timer");
let countTimer = parseInt(timer.textContent);

setInterval(() => {
  if (countTimer > 0) {
    countTimer--;
    timer.textContent = countTimer;
  } else {
    alert("Вы победили в конкурсе!");
    location.reload();
  }
}, 1000);

const countDown = document.getElementById("countDown");
const downloadLink = document.getElementById("downloadLink");
const targetDate = new Date(new Date().getTime() + 15000 * 1000).getTime();

let intervalId;

function startCountdown() {
  intervalId = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeDifference = targetDate - currentTime;

  if (timeDifference > 0) {
    const totalSeconds = Math.floor(timeDifference / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `
                ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}
            `;

    countDown.textContent = formattedTime;
  } else {
    downloadLink.href = "task.js";// здесь мог быть красивый котик, но я не нашел прямых ссылок =(
    downloadLink.click();
    clearInterval(intervalId);
    countDown.textContent = "Файл загружается!";
  }
}
startCountdown();
