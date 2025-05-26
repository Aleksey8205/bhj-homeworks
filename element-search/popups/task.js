document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal_main");
    const btnGood = document.querySelector(".btn_danger");
    const btnSucces = document.querySelector(".btn_success");
    const closeModal = document.querySelector(".modal__close");
    const modalSucces = document.getElementById("modal_success");

    modal.classList.add("modal_active");

    closeModal.addEventListener("click", () => {
        if (modal.classList.contains("modal_active")) {
            modal.classList.remove("modal_active");
        }
        if (modalSucces.classList.contains("modal_active")) {
            modalSucces.classList.remove("modal_active");
        }
    });

    btnGood.addEventListener("click", () => {
        if (modal.classList.contains("modal_active")) {
            modal.classList.remove("modal_active");
            modalSucces.classList.add("modal_active");
        }
    });

    btnSucces.addEventListener("click", () => {
            modalSucces.classList.remove("modal_active");
    });
});