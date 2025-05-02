function switchTab (event) {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab__content");
    
    tabs.forEach(tab => tab.classList.remove("tab_active"))
    contents.forEach(content => content.classList.remove("tab__content_active"));

    const index = [...tabs].indexOf(event.target);

    tabs[index].classList.add("tab_active");
    contents[index].classList.add("tab__content_active")
}

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", switchTab);
})