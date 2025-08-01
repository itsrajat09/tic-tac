alert("zoom out if you are using Phone");
let boxes = document.querySelectorAll(".box")
let msg_container = document.querySelector(".msg_container")
let msg = document.querySelector(".msg")
let btn_newgame = document.querySelector("#btn_newgame")
let btn_resetgame = document.querySelector("#btn_reset")
let turnO = true; 

const winning_patterns = [
    [0, 1, 2],  // Top row
    [3, 4, 5],  // Middle row
    [6, 7, 8],  // Bottom row
    [0, 3, 6],  // Left column
    [1, 4, 7],  // Middle column
    [2, 5, 8],  // Right column
    [0, 4, 8],  // Diagonal
    [2, 4, 6],  // Diagonal
]
let reset_btn =()=>{
    enabled_btn();
msg_container.classList.add("hide")
}
btn_newgame.addEventListener("click",reset_btn);
btn_resetgame.addEventListener("click",reset_btn);


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O"
            turnO = false
        } else {
            box.innerText = "X"
            turnO = true

        }
        box.disabled = true;
        checkwinner();
    })

});
const disabled_btn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabled_btn =()=>{
    for(let  box of boxes ){
        box.disabled= false;
        box.innerText = " ";

    }
}

const winnermsg = (winner)=>{
msg.innerText = `Winner is ${winner}`
msg_container.classList.remove("hide")
}
const checkwinner = () => {
    for (let pattern of winning_patterns) {
        
        let  val1 = boxes[pattern[0]].innerText
        let val2 = boxes[pattern[1]].innerText
        let val3 = boxes[pattern[2]].innerText
        



     if (val1 != "" && val2 != "" && val3 != "") {
        if (val1 == val2 && val2 == val3) {
            console.log("winner", val1);
            disabled_btn();
            winnermsg(val1);
        }
    }
}
};







