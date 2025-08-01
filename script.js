let boxes = document.querySelectorAll(".box")
let msg_container = document.querySelector(".msg_container")
let msg = document.querySelector(".msg")
let new_btn = document.querySelector(".new_btn");
let reset_btn = document.querySelector(".reset_btn")
let turnO = true;



const winning_condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const enabled_btn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msg_container.classList.add("hide")
    }

}

const disabled_btn = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
}
new_btn.addEventListener("click", enabled_btn);
reset_btn.addEventListener("click", enabled_btn);

const winner_msg = (winner) => {
    msg_container.classList.remove("hide")
    msg.innerText = `winner is "${winner}"`;
    disabled_btn();

}

let checkwinner = () => {
    for (let pattern of winning_condition) {

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("battle has ended")

                winner_msg(val1);
            }
        }

    }

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        checkwinner();
        box.disabled = true;

    })

});





