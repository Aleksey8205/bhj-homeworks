const chatWidget = document.querySelector(".chat-widget");
const messageTime = document.querySelectorAll("message__time");
const chatInput = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");


function currentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
}


let timer = null;

let arrMessageBot = [
  "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
  "Что-нибудь еще может быть по дальше?",
  "В следующей жизний",
  "Не в этот раз",
  "Вы нормальный?",
];

function generateRandomBot() {
  const randomIndex = Math.floor(Math.random() * arrMessageBot.length);
  return arrMessageBot[randomIndex];
}

let isActive = false;

chatWidget.addEventListener("click", (event) => {
  event.preventDefault();

  if (!isActive) {
    function startIdleTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        messages.innerHTML += `
                <div class="message">
                <div class="message__time">${currentTime()}</div>
                <div class="message__text">Почему не пишешь?</div>
              </div>
                `;
      }, 30000);
    }

    chatWidget.classList.add("chat-widget_active");
    messages.innerHTML += `
          <div class="message">
              <div class="message__time">${currentTime()}</div>
              <div class="message__text">Добрый день!</div>
          </div>
          `;
    isActive = true;
    startIdleTimer();
  }
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    const userMessage = chatInput.value.trim();

    if (userMessage !== "") {
      messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${currentTime()}</div>
    <div class="message__text">${userMessage}</div>
  </div>
`;

      const botResponce = generateRandomBot();
      setTimeout(() => {
        messages.innerHTML += `
    <div class="message">
    <div class="message__time">${currentTime()}</div>
    <div class="message__text">${botResponce}</div>
  </div>
    `;
      }, 500);

      chatInput.value = "";
    }
  }
});

function resetIdleTimer() {
    clearInterval(timer);
  }

chatInput.addEventListener("focusin", resetIdleTimer);
chatInput.addEventListener("input", resetIdleTimer);
