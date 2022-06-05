
// Random value for 1
var randomnumberNumber1=Math.floor(Math.random()*6)+1;
if(randomnumberNumber1>randomnumberNumber2){document.querySelector("h1").innerHTML="Player 1 Wins!"}
else if(randomnumberNumber1<randomnumberNumber2){document.querySelector("h1").innerHTML="Player 2 Wins!"}
else {document.querySelector("h1").innerHTML="Draw!"}
if(randomnumberNumber1===1){document.querySelector(".img1").setAttribute("src","images/dice1.png");}
else if(randomnumberNumber1===2){document.querySelector(".img1").setAttribute("src","images/dice2.png");}
else if(randomnumberNumber1===3){document.querySelector(".img1").setAttribute("src","images/dice3.png");}
else if(randomnumberNumber1===4){document.querySelector(".img1").setAttribute("src","images/dice4.png");}
else if(randomnumberNumber1===5){document.querySelector(".img1").setAttribute("src","images/dice5.png");}
else {}

// Random value for 2
var randomnumberNumber2=Math.floor(Math.random()*6)+1;
if(randomnumberNumber2===1){document.querySelector(".img2").setAttribute("src","images/dice1.png");}
else if(randomnumberNumber2===2){document.querySelector(".img2").setAttribute("src","images/dice2.png");}
else if(randomnumberNumber2===3){document.querySelector(".img2").setAttribute("src","images/dice3.png");}
else if(randomnumberNumber2===4){document.querySelector(".img2").setAttribute("src","images/dice4.png");}
else if(randomnumberNumber2===5){document.querySelector(".img2").setAttribute("src","images/dice5.png");}
else {}

// Who wins
if(randomnumberNumber1>randomnumberNumber2){document.querySelector("h1").innerHTML="Player 1 Wins!";}
else if(randomnumberNumber1<randomnumberNumber2){document.querySelector("h1").innerHTML="Player 2 Wins!";}
else {document.querySelector("h1").innerHTML="Draw!";}
setTimeout(function(){
    document.querySelector("h1").innerHTML="Refresh Me";
  },2000);
