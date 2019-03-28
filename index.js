//creating random number between 1-6
var randomNumber1 = Math.random(); // random number
randomNumber1 = randomNumber1 * 6; // ranomd number between 0-5
randomNumber1 = Math.floor(randomNumber1) + 1; // random whole number between 1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
var randomImgSource = "images/" + randomDiceImg;

//setting attribute
document.querySelectorAll("img")[0].setAttribute("src", randomImgSource);

//do it all again for image 2
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

//change title depending on which dice roll is bigger
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = " Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
