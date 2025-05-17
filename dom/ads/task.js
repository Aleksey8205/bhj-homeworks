const rotators = document.querySelectorAll(".rotator");

rotators.forEach((rotator) => {
    let currentIndex = 0;
    const cases = Array.from(rotator.children);

    function rotateText() {
        const prevElement = cases[currentIndex];

        currentIndex++;
        if (currentIndex >= cases.length) {
            currentIndex = 0;
        }

        const nextElement = cases[currentIndex];


        prevElement.classList.remove("rotator__case_active");

        nextElement.classList.add("rotator__case_active");
        nextElement.style.color = nextElement.dataset.color || ""; 

        
        const delay = parseInt(nextElement.dataset.speed) || 1000; 
        setTimeout(rotateText, delay); // 
    }

    cases[currentIndex].classList.add("rotator__case_active");
    cases[currentIndex].style.color = cases[currentIndex].dataset.color || "";

    const initDelay = parseInt(cases[currentIndex].dataset.speed) || 1000;
    setTimeout(rotateText, initDelay);
});