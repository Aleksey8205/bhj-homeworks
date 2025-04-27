const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let counterCount = parseInt(counter.textContent);
let lastClickTime = null;

let isWidth = true;
let currentWidth = 200;

function addCount() {
    const currentTime = new Date().getTime();
    
    if (lastClickTime !== null) {
        const timeDiff = (currentTime - lastClickTime) / 1000;
        const clickSpeed = 0.5 / timeDiff;
        speed.textContent = clickSpeed.toFixed(0);
    }
    lastClickTime = currentTime;
    


    counterCount++;
    counter.textContent = counterCount;
    if (isWidth) {
        currentWidth += 25;
    } else {
        currentWidth -= 25;
    }

    cookie.setAttribute("width", currentWidth);

    isWidth = !isWidth;
}