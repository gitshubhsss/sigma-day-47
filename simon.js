let started=false;
let level=0;
let h2=document.querySelector("h2");
let colorClasses=["red","green","yellow","blue"];
let userSeq=[];
let gameSeq=[];
let highScore=0;
//1)press any key to start the game
document.addEventListener("keypress",()=>{
   if(started==false){
      console.log("game started");
      started=true;
      levelUp();
   }
  
})

//2)level up 
function levelUp(){
   userSeq=[];
   level++;
   h2.innerText=`level ${level}`
   let randInx=Math.floor(Math.random()*4);
   let randColor=colorClasses[randInx];
   let randBtn=document.querySelector(`.${randColor}`)
   //for displaying this random color will create another funtion
   gameSeq.push(randColor);
   console.log(gameSeq);//here we are passing the colors 
   chageColor(randBtn)
  
}

//3)press any key and display the random color

function flashBtn(btn){
   btn.addEventListener("click",chageColor)
}

function chageColor(btn){
   btn.classList.add("flashColor");
   setTimeout(() => {
      btn.classList.remove("flashColor")
   }, 250);
}

//when user press the buttons

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",userPress)//passing the userpress() as an callback
}

function userPress(){
   let btn=this;
   let btns=btn.getAttribute("id")//get attribute wia class name
   userSeq.push(btns);//push
   console.log(userSeq);
   console.log(btns);
   btn.classList.add("userFlash");
   setTimeout(() => {
   btn.classList.remove("userFlash")
   }, 250);
   checkAns(userSeq.length-1);
}

//5)check ans

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length===gameSeq.length){
        setTimeout( levelUp(),1500)
      }
    }
    else{
      let h2=document.querySelector("h2");
      h2.innerHTML=` Your Score was <b> ${level} </b> <br>Press Any Key To Restart the Game`;
      document.querySelector("body").style.backgroundColor="red";
      highestScore()
      setTimeout(() => {
         document.querySelector("body").style.backgroundColor="white";
      }, 200);
      reset();
    }
}

function reset() {
   started=false;
   level=0;
   userSeq=[];
   gameSeq=[];
}

function highestScore(){
   let h3=document.querySelector('h3');
   if(highScore<gameSeq.length){
      highScore=gameSeq.length;
      h3.innerText=`High Score ${highScore}`;
   }
}

