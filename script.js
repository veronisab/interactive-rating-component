const buttons = document.querySelectorAll(".small-btn-container button");
const submit = document.getElementById("submit");
const error = document.getElementById("error-msg");
const selectionMsg = document.getElementById("selection-msg");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
let selected = "";

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        selected = e.target.textContent
        e.target.classList.add("selected")
    })
})

submit.addEventListener("click", (e) => {
    selectionMsg.textContent = `You selected ${selected} out of 5`
    box1.classList.add("d-none");
    box2.classList.remove("d-none");
})
