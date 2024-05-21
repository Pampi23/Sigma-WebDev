let gameSeq =[];
let userSeq = [];
let started = false;

let level = 0;
let highestScore =0 ;
let h3 = document.querySelector("h3");

let h2 = document.querySelector("h2");
let btns = ["yellow","red","green","purple"];
document.addEventListener("keypress",()=>{
    if(started==false){
        started=true;
        levelUp();
    }
    
});
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(()=>{
    btn.classList.remove("flash");
},300);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },300);
    }
function levelUp(){
    userSeq=[];
level++;
h2.innerText = "Level "+level;
highestScore++;
//random btn choose
let randIdx = Math.floor(Math.random()*4);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`)
gameSeq.push(randColor);


gameFlash(randBtn);
}
function checkAns(idx){

if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,500);
       
    }

}else{
    
    let body=document.querySelector("body");
    body.classList.add("end");
    setTimeout(()=>{
        body.classList.remove("end");
    },100);
    h2.innerText="Game over ! Press any key to start";
    started = false;
    reset();
}
}

function btnPress(){
let btn = this;

userFlash(btn);
let userColor = btn.getAttribute("id");

userSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
   
    document.addEventListener("keypress",()=>{
        if(started==false){
            started=true;
            levelUp();
        }
        
    });
     gameSeq =[];
 userSeq = [];
 level=0;
}