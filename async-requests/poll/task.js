document.addEventListener("DOMContentLoaded", function(event) {
    const answers = document.getElementById("poll__answers");
    const titles = document.querySelector(".poll__title");
    const card = document.querySelector(".card");

    function loadPollData() {
        let xhr = new XMLHttpRequest();
        
        xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll", true);
        xhr.setRequestHeader("Accept", "application/json"); 
        
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300){
                try {
                    const data = JSON.parse(xhr.responseText);
                    
                    titles.textContent = data.data.title;
                    const answer = data.data.answers;

                    for(let i = 0; i < answer.length; i++){
                        const createBtn = document.createElement("button");
                        createBtn.classList.add("poll__answer");
                        createBtn.textContent = answer[i];
                        answers.appendChild(createBtn);
                        
                        createBtn.addEventListener("click", function(e) {
                            e.preventDefault();
                            
                            if(confirm(`Спасибо за участие в опросе\nВы выбрали ${answer[i]}\nВы уверены?`)){
                                submitVote(data.id, i); 
                            }else{
                                alert("Спасибо за участие!");
                                location.reload();
                            }
                        });
                    }
                } catch(err) {
                    console.error("Ошибка парсинга:", err.message);
                }
            } else {
                console.error("Ошибка загрузки опроса:", xhr.statusText);
            }
        };
        xhr.send(null); 
    }
    function submitVote(poll_id, index) {
        let xhr = new XMLHttpRequest();
        
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll", true); 
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300){
                try {
                    const result = JSON.parse(xhr.responseText);
                    displayResults(result.stat); 
                } catch(err) {
                    console.error("Ошибка парсинга результата:", err.message);
                }
            } else {
                console.error("Ошибка отправки голоса:", xhr.statusText);
            }
        };
             
        xhr.send(`vote=${poll_id}&answer=${index}`);
    }

    function displayResults(results) {
        card.innerHTML = "";
    
        const totalVotes = results.reduce((sum, item) => sum + item.votes, 0);
    
        const percentResults = results.map(item => ({
            answer: item.answer,
            votes: item.votes,
            percentage: ((item.votes / totalVotes) * 100).toFixed(2) + "%"
        }));
    
        percentResults.forEach(function(item) {
            const div = document.createElement("div");
            div.textContent = `${item.answer}: ${item.percentage}`;
            card.appendChild(div);
        });
    }

    loadPollData();
});