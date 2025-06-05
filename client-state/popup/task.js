document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = document.querySelector(".modal__close");

    if (!document.cookie.includes("subscribed=true")) {
        modal.style.display = "flex";
    }


    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
        document.cookie = "subscribed=true; max-age=31536000; path=/";
    });
});
/*
function clearCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

clearCookie("subscribed"); */