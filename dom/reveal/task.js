const observe = document.querySelectorAll(".reveal")
const options = {
    rootMargin: '0px',
    threshold: 0.2
};

function handleIntersection(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("reveal_active");
        };
    })
}

const observer = new IntersectionObserver(handleIntersection, options);

observe.forEach(observe => {
    observer.observe(observe)
});