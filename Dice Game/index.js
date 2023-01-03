function randomnum(){
  var randonNumber=Math.random();
  randonNumber*=6;
  randonNumber=Math.floor(randonNumber)+1;
  return randonNumber;
}
var random1=randomnum();
var random2=randomnum();
var player1=document.querySelector("img");
var player2=document.querySelectorAll("img")[1];
player1.setAttribute("src","images\\dice"+random1+".png");
player2.setAttribute("src","images\\dice"+random2+".png");
function winner(num1,num2){
  if(num1>num2){
    return "Player 1 WINS!";
  }
  if(num1<num2){
    return "Player 2 WINS!";
  }
  if(num1===num2){
    return "It's a DRAW!";
  }
}
document.querySelector("h1").textContent= winner(random1,random2);
