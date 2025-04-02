 let boxes=document.querySelectorAll(".box");
 let resetbtn=document.querySelector("#reset-btn");
 let newgamebtn=document.querySelector("#newbtn");
 let msgcont =document.querySelector(".msgcont");
 let msg= document.querySelector(".msg");


 let turn0=true;
 const winpatten=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];
// enable boxes
 const enablebox=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
// used to reset game after winning 
const resetgame=()=>{
    turn0=true;
    enablebox();
    msgcont.classList.add("hide"); 
}

//  diable button after match is over
 const boxdisable=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
 }

// showing winner
 function showwinner(winner) {
    msg.innerText = `Congratulation ${winner} wins`;
    msgcont.classList.remove("hide");
    boxdisable();
}
// checking winner
const checkwinner=()=>{ 
    for (let pattern of winpatten){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if (pos1val!="" && pos2val!="" && pos3val!=""){
            if (pos1val===pos2val && pos3val===pos2val){
                showwinner(pos1val);
            }
        }
    } 
}


// turning chance for x and o and also calling checkwinner function
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.style.color = '#255C99';
            box.textContent="X";
            turn0=false;
        }else{
            box.style.color = '#F40000';
            box.textContent="O";
            turn0=true; 
        }
        box.disabled=true;
        checkwinner();
    })
 });

 newgamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);