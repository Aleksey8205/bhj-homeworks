document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

    xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
        const percentLoaded = Math.round((event.loaded / event.total) * 100);
        const progressBar = document.getElementById("progress");
        progressBar.value = percentLoaded;
    }
};

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status <= 299) {
            const card = document.querySelector(".card");
            const responseDiv = document.createElement("div");
            responseDiv.textContent = "файл успешно загружен";
            card.appendChild(responseDiv);
        } else {
            responseDiv.textContent = "Возникла ошибка во время загрузки файла"
        }
    };

    xhr.send(formData);
});