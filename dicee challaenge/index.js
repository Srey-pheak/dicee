/*var randomNumber1=Math.floor(Math.random()*6+1);
var randomimg = "dice"+randomNumber1+".png";
var randomimgsource = "img/"+randomimg;
document.querySelectorAll("img")[0].setAttribute("src" ,randomimgsource);

var randomNumber2 = Math.floor(Math.random()*6 +1);
var randomeimg2 ="dice"+randomNumber2+".png";
var randomimgsource2 ="img/"+randomeimg2;
document.querySelectorAll("img")[1].setAttribute("src" ,randomimgsource2);


if (randomNumber1 > randomNumber2){

document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2){

  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}

else{
  document.querySelector("h1").innerHTML = "🚩 Draw";
}
*/


/*var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
document.querySelectorAll("img")[0].setAttribute("src", "img/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "img/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML ="🚩 Play 1 Wins!";
}

else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML ="🚩 Play 2 Wins!";
}

else{
  document.querySelector("h1").innerHTML = "🚩 Draw";
}
*/

var randomNumber1=Math.floor(Math.random()*6);
var randomNumber2=Math.floor(Math.random()*6);
var arrayimg =["img/dice1.png", "img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png"];
document.querySelectorAll("img")[0].setAttribute("src", arrayimg[randomNumber1]);
document.querySelectorAll("img")[1].setAttribute("src", arrayimg[randomNumber2]);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML ="🚩 Play 1 Wins!";
}

else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML ="🚩 Play 2 Wins!";
}

else{
  document.querySelector("h1").innerHTML = "🚩 Draw";
}
