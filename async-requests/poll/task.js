const answers = document.getElementById("poll__answers");
const titles = document.querySelector(".poll__title");

async function poll () {
    const response = await fetch("https://students.netoservices.ru/nestjs-backend/poll");
    const data = await response.json();

    titles.textContent = data.data.title;
    const answer = data.data.answers;

    for (let i = 0; i < answer.length ; i++) {
        const createBtn = document.createElement("button");
        createBtn.classList.add("poll__answer");
        createBtn.textContent = answer[i];
        answers.appendChild(createBtn);

        createBtn.addEventListener("click", () => {
            if(confirm(`Спасибо за участие в опросе\nВы выбрали ${answer[i]}\nВы уверены?`)) {
                
            } else {
                location.reload()
            }
        })
    }

   
}

poll()