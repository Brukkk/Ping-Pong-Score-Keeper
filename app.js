const p1Display = document.querySelector("#p1");
const p2Display = document.querySelector("#p2");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const reset = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;

p1Btn.addEventListener("click",()=>{
    p1Score += 1;
    p1Display.textContent = p1Score;
});

p2Btn.addEventListener("click", ()=>{
    p2Score += 1;
    p2Display.textContent = p2Score;
});

reset.addEventListener("click", ()=>{
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
})