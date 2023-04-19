
const startBtn = document.getElementById("start_btn");
const startScreen = document.getElementsByClassName("start")[0];
const gameScreen = document.getElementsByClassName("playing")[0];

// clice event to hide start stage and display playing stage
startBtn.addEventListener('click', () => {
    startScreen.style.display = ('none');
    gameScreen.style.display =('block');
});

