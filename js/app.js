// 1) Define the required variables used to track the state of the game.
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};

let timer;
let gameOver;

// 2) Store cached element references.
const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepinessStatEl = document.querySelector("#sleepiness-stat");

const playBtnEl = document.querySelector("#play");
const feedBtnEl = document.querySelector("#feed");
const sleepBtnEl = document.querySelector("#sleep");

const gameMessageEl = document.querySelector("#message");

const resetBtnEl = document.querySelector("#restart");

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

function init() {
    gameMessageEl.classList.add("hidden");
    resetBtnEl.classList.add("hidden");

    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;

    gameOver = false;
    timer = setInterval(runGame, 2000)
}
init();

function runGame() {
    // console.log("The game is running!")
    updateStates();
    checkGameOver();
    render();
}

// 4) The state of the game should be rendered to the user.
function render() {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;
}

function updateStates() {
    state.boredom += Math.floor(Math.random() * 4);
    state.hunger += Math.floor(Math.random() * 4);
    state.sleepiness += Math.floor(Math.random() * 4);
}

// 5) Handle the game over logic. 
function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
        clearInterval(timer);

        gameMessageEl.classList.remove("hidden");
        resetBtnEl.classList.remove("hidden");
    }
}

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.
// function playBtnClick() {
//     state.boredom = 0;
//     render();
// }
// playBtnEl.addEventListener("click", playBtnClick);

// function feedBtnClick() {
//     state.hunger = 0;
//     render();
// }
// feedBtnEl.addEventListener("click", feedBtnClick);

// function sleepBtnClick() {
//     state.sleepiness = 0;
//     render();
// }
// sleepBtnEl.addEventListener("click", sleepBtnClick);

function handleBtnClick(prop) {
    state[prop] = 0;
    render();
}

playBtnEl.addEventListener("click", () => handleBtnClick("boredom"));
feedBtnEl.addEventListener("click", () => handleBtnClick("hunger"));
sleepBtnEl.addEventListener("click", () => handleBtnClick("sleepiness"));

// 7) Create reset functionality.
resetBtnEl.addEventListener("click", init);