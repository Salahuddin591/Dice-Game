document.querySelector("button").onclick = function refreshpage(){
  // dice img1 left side
var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceimage = "dice" + randomNumber1 + ".png";

var randomimageSource = "images/" + randomDiceimage;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomimageSource);


// dice img2 right side
var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomimageSource2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll('img')[1].setAttribute("src" , randomimageSource2);

  if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "🚩play 1 wins ! ";
  }
   else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML="🚩player 2 wins";
  }
  else{
    document.querySelector('h1').innerHTML ="🚩Draw!!";
  }
  

}


