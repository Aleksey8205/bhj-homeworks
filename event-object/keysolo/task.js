class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.timerElement = container.querySelector(".timer-value");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");

    this.timer = null;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener("keydown", (e) => {
      const inputtedKey = e.key.toLowerCase();
      const currentSymbol = this.currentSymbol.textContent.toLowerCase();

      if (inputtedKey === currentSymbol) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  startTimer(time) {
    let remainingTime = time;
    this.timer = setInterval(() => {
      remainingTime--;
      this.timerElement.textContent = remainingTime;
      if (remainingTime <= 0) {
        clearInterval(this.timer);
        this.fail();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current"))
      this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add("symbol_current");
      return;
    }

    if (++this.winsElement.textContent >= 10) {
      alert("Победа!");
      this.stopTimer();
      this.reset();
    } else {
      this.stopTimer();
      this.setNewWord();
    }
  }

  fail() {
    if (++this.lossElement.textContent >= 5) {
      alert("Вы проиграли!");
      this.stopTimer();
      this.reset();
    } else {
      this.stopTimer();
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();
    this.startTimer(word.length + 1);
    this.renderWord(word);
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));
