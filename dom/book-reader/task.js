const linksSize = document.querySelectorAll(".font-size");
const linkColor = document.querySelectorAll(".text_color_black, .text_color_gray, .text_color_whitesmoke");
const linkBgColor = document.querySelectorAll(".bg_color_black, .bg_color_gray, .bg_color_white");
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

linkColor.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        linkColor.forEach((l) => l.classList.remove("color_active"));
        link.classList.add("color_active");

        const color = link.dataset.textColor;
        book.classList.remove("text_color_black", "text_color_gray", "text_color_whitesmoke");
        book.classList.add(`book_color-${color}`);
    });
});

linkBgColor.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        linkBgColor.forEach((l) => l.classList.remove("color_active"));
        link.classList.add("color_active");

        const bgColor = link.dataset.bgColor;
        book.classList.remove("bg_color_black", "bg_color_gray", "bg_color_white");
        book.classList.add(`book_bg-${bgColor}`);
    });
});