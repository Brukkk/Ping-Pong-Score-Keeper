const p1Display = document.querySelector("#p1");
const p2Display = document.querySelector("#p2");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const reset = document.querySelector("#reset");
const selectScore = document.querySelector("#score");
const scores = document.querySelectorAll("option");
let p1Score = 0;
let p2Score = 0;
let winningScore = 6;

function someoneWins(){
    if (p1Score >= winningScore || p2Score >= winningScore ){
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p1Btn.classList.add("disabled");
        p2Btn.classList.add("disabled");
    }

    if (p1Score >= winningScore) {
        p1Display.classList.add("winner");
        p2Display.classList.add("looser");
    }

    if (p2Score >= winningScore)  {
        p2Display.classList.add("winner");
        p1Display.classList.add("looser");
    }
}

p1Btn.addEventListener("click",()=>{
    if (p1Score < winningScore || p2Score < winningScore){
        p1Score += 1;
        p1Display.textContent = p1Score;
    } 
    
    someoneWins();
    
});

p2Btn.addEventListener("click", ()=>{
    if (p2Score < winningScore || p1Score < winningScore){
        p2Score += 1;
        p2Display.textContent = p2Score;
    }
    
    someoneWins();
});

reset.addEventListener("click", ()=>{
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Btn.disabled = false;
    p1Btn.classList.remove("disabled");
    p2Btn.disabled = false;
    p2Btn.classList.remove("disabled");
    p1Display.classList.remove("winner","looser");
    p2Display.classList.remove("winner","looser");

    winningScore = parseInt(selectScore.value);
});

selectScore.addEventListener("change",()=>{
    winningScore = parseInt(selectScore.value);
    console.log("Changed score: " , winningScore);
    someoneWins();   
})  
