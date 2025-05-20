const linksSize = document.querySelectorAll(".font-size");
const book = document.getElementById("book");

linksSize.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        linksSize.forEach((l) => l.classList.remove("font-size_active"));
        link.classList.add("font-size_active");

        const size = link.dataset.size;
        book.classList.remove("book_fs-small", "book_fs-big");
        if (size === "small") {
            book.classList.add("book_fs-small");
        } else if (size === "big") {
            book.classList.add("book_fs-big");
        }
    });
});

const linkColor = document.querySelectorAll(".book__control_color > .color");
const linkBgColor = document.querySelectorAll(".book__control_background > .color");

linkColor.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        linkColor.forEach((l) => l.classList.remove("color_active"));
        link.classList.add("color_active");

        const color = link.dataset.textColor;

        book.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");

        book.classList.add(`book_color-${color}`);
    })
})

linkBgColor.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        linkColor.forEach((l) => l.classList.remove("color_active"));
        link.classList.add("color_active");

        const color = link.dataset.bgColor;
        
        book.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white");

        book.classList.add(`book_bg-${color}`);
    })
})