document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById("editor");
    const saveText = localStorage.getItem("saveData");
    const reset = document.getElementById("reset");

    if(saveText !== null) {
        editor.value = saveText;
    }

    editor.addEventListener("input", function(event) {
        localStorage.setItem("saveData", editor.value)
    })

    reset.addEventListener("click", e => {
        e.preventDefault()
        editor.value = ""
        localStorage.clear()
    })

})