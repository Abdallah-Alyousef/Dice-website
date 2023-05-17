var randomNumber1 = Math.floor(Math.random() * 6 )+1;

var randomNumber2 = Math.floor(Math.random() * 6 )+1;

var randomDice1 = "images/dice"+randomNumber1+".png";

var randomDice2 = "images/dice"+randomNumber2+".png";

var firstDice = document.querySelector(".img1").setAttribute("src",randomDice1);

var secondDice = document.querySelector(".img2").setAttribute("src",randomDice2);

function startDice() {
   
    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
        }
        else if(randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = "Player 2 Wins";
        }
        else {
            document.querySelector("h1").innerHTML = "Draw";
        }
}
startDice();

