
// random number generator

var num1=Math.random();
var dice1=(num1*6);
var round1=Math.floor(dice1)+1;

var randomNumberImage1="images/dice"+round1+".png";

// var randomImagesSource="images/"+randomNumberImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomNumberImage1);



var num2=Math.random();
var dice2=(num2*6);
var round2=Math.floor(dice2)+1;

var randomNumberImage2="images/dice"+round2+".png";

// var randomImagesSource="images/"+randomNumberImage;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomNumberImage2);

// player 1 wins

if(round1 > round2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(round1 < round2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
