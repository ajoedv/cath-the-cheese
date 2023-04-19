
const startBtn = document.getElementById("start_btn");
const startScreen = document.getElementsByClassName("start")[0];
const gameScreen = document.getElementsByClassName("playing")[0];

// clice event to hide start stage and display playing stage
startBtn.addEventListener('click', () => {
    startScreen.style.display = ('none');
    gameScreen.style.display =('block');
});

// select Random Img by clicking catch btn
function selectRandomImage() {
    var img = document.getElementsByClassName("your-choice")[0];
    var winner = document.getElementsByClassName("winner")[0];


     // Generate a random number between 0 and 1
     var randomNum = Math.floor(Math.random() * 2);

     // Set the image source based on the random number
     if (randomNum === 1) {
        img.src = "./assets/images/cheese1.png";
        winner.textContent = 'You Win';
        yscore.textContent = Number(yscore.textContent) + 1;
        if (yscore.textContent == 10) {
            winner.textContent = 'Game Over - You Win! refresh the page';
            document.getElementById('catch_btn').disabled = true;
        }
      } else {
        img.src = "./assets/images/mouse.png";
        winner.textContent = 'You Lost';
        mscore.textContent = Number(mscore.textContent) + 1;
        if (mscore.textContent == 10) {
            winner.textContent = 'Game Over - You Lost! refresh the page';
            document.getElementById('catch_btn').disabled = true;
        }
      }
}