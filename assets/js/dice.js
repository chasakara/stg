const diceOne = document.querySelector(".diceOne");
const diceTwo = document.querySelector(".diceTwo");
const rollBtn = document.querySelector(".roll");
let diceOneResult;
let diceTwoResult;
let diceResult;

const randomDice = () => {
    const randomOne = Math.floor(Math.random() * 6 + 1);
    const randomTwo = Math.floor(Math.random() * 6 + 1);
    rollDiceOne(randomOne);
    rollDiceTwo(randomTwo);
};

const rollDiceOne = (randomOne) => {
    diceOne.classList.add("rolling-animation");

    setTimeout(() => {
        switch (randomOne) {
            case 1:
                diceOne.style.transform = "rotateX(0deg) rotateY(0deg)";
                diceOneResult = 1;
                break;

            case 6:
                diceOne.style.transform = "rotateX(180deg) rotateY(0deg)";
                diceOneResult = 6;
                break;

            case 2:
                diceOne.style.transform = "rotateX(-90deg) rotateY(0deg)";
                diceOneResult = 2;
                break;

            case 5:
                diceOne.style.transform = "rotateX(90deg) rotateY(0deg)";
                diceOneResult = 5;
                break;

            case 3:
                diceOne.style.transform = "rotateX(0deg) rotateY(90deg)";
                diceOneResult = 3;
                break;

            case 4:
                diceOne.style.transform = "rotateX(0deg) rotateY(-90deg)";
                diceOneResult = 4;
                break;

            default:
                break;
        }

        diceOne.classList.remove("rolling-animation") = "none";
    }, 1050);
};

const rollDiceTwo = (randomTwo) => {
    diceTwo.classList.add("rolling-animation");

    setTimeout(() => {
        switch (randomTwo) {
            case 1:
                diceTwo.style.transform = "rotateX(0deg) rotateY(0deg)";
                diceTwoResult = 1;
                break;

            case 6:
                diceTwo.style.transform = "rotateX(180deg) rotateY(0deg)";
                diceTwoResult = 6;
                break;

            case 2:
                diceTwo.style.transform = "rotateX(-90deg) rotateY(0deg)";
                diceTwoResult = 2;
                break;

            case 5:
                diceTwo.style.transform = "rotateX(90deg) rotateY(0deg)";
                diceTwoResult = 5;
                break;

            case 3:
                diceTwo.style.transform = "rotateX(0deg) rotateY(90deg)";
                diceTwoResult = 3;
                break;

            case 4:
                diceTwo.style.transform = "rotateX(0deg) rotateY(-90deg)";
                diceTwoResult = 4;
                break;

            default:
                break;
        }

        diceTwo.classList.remove("rolling-animation");
        diceResult = diceOneResult + diceTwoResult;
        document.querySelector(".result p").classList.add("display");
        document.querySelector("#result-number").textContent = diceResult;
    }, 1050);
    
};


rollBtn.addEventListener("click", randomDice);
