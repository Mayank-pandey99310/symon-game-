let gameSeq = [];
let userSeq = [];

let btns = ["red", "orange", "blue", "green"]

let started = false;
let level = 0;

let h3 = document.querySelector("h3")

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log('game started');
        started = true;
        levelup()
    }
})

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)

}
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250)

}

function levelup() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`

    let randomIndex = Math.floor(Math.random() * 3) + 1
    let randomColor = btns[randomIndex]
    let randombtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor)
    console.log(gameSeq);
    
    gameFlash(randombtn);
    // console.log(randombtn);
    // console.log(randomIndex);
    // console.log(randomColor);

}
function checkAns(idx){
    // console.log('current level', level);
    // let idx = level-1;


    if(userSeq[idx] == gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length ){
            setTimeout(levelup, 1000)
        }
        
    }else{
           h3.innerHTML = `Game Over! <b>your score was ${level}</b>  <br> press any key to restart`;
           document.querySelector("body").style.backgroundColor = 'red'
           setTimeout(function(){
            document.querySelector("body").style.backgroundColor = 'white'
           },150)
           reset();
    }

    
}

function btnpress() {
    // console.log(this);
    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute("id")
    // console.log(userColor)
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")

for (btn of allBtns) {
    btn.addEventListener("click", btnpress)
}

// function highscore(){

//     let highScore = 0;
//     if(highScore < level){
//         highScore = level;
//     }
//     console.log(highScore);
    
// }

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
