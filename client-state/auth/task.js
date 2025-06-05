const signForm = document.getElementById("signin__form");
const signActive = document.getElementById("signin");
const userId = document.getElementById("user_id");
const welcome = document.getElementById("welcome");
const savedUserId = localStorage.getItem("saveId");
const btnExit = document.getElementById("btn-exit")

if(savedUserId !== null && savedUserId.length > 0){
    showWelcomeBlock(savedUserId);
}

signForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
        let loginInput = this.querySelector('[name="login"]').value.trim(); 
        let passwordInput = this.querySelector('[name="password"]').value.trim();

    const xhr = new XMLHttpRequest;
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth")
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    const params = "login=" + encodeURIComponent(loginInput) +
                    "&password=" + encodeURIComponent(passwordInput);

    xhr.send(params);
    xhr.onload = function() {
        let responseData = xhr.responseText;
        let parsedResponse = JSON.parse(responseData);    
        if(parsedResponse.success === true) {
            let userID = parsedResponse.user_id;

            showWelcomeBlock(userID);

            localStorage.setItem("saveId", userID);
        } else {
            alert("Неверный логин/пароль");
            signForm.reset();
        }
        let saveUserId = parsedResponse.user_id
        localStorage.setItem("saveId", saveUserId);
    };
});


function showWelcomeBlock(userID) {
    signActive.classList.remove("signin_active");

    welcome.classList.replace("welcome", "welcome__active");
    
    userId.textContent = userID;
}

btnExit.addEventListener("click", e => {
    e.preventDefault();
    signActive.classList.add("signin_active")
    welcome.classList.replace("welcome__active", "welcome");
    signForm.reset();
    localStorage.clear();
})
 