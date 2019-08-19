var score_p1=document.querySelector("#display_player1");
var score_p2=document.querySelector("#display_player2");
var btn_p1=document.querySelector("#btn_score1");
var btn_p2=document.querySelector("#btn_score2");
var reset=document.querySelector("#btn_reset");
var max_score=document.querySelector(".winning_score");
var max_score_selector=document.querySelector("input");

var winningscore=5;

var p1_score=0;
var p2_score=0;

var gameover=false;


btn_p1.addEventListener("click",function(){
  if(!gameover){
	p1_score++;
	if(p1_score===winningscore){
		score_p1.classList.add("winner");
		gameover= !gameover;
	}
	score_p1.textContent=p1_score;
  }
});

btn_p2.addEventListener("click",function(){
	console.log(gameover);
	if(!gameover){
	p2_score++;
	if(p2_score===winningscore){
		score_p2.classList.add("winner");
		gameover= !gameover;
	}
	score_p2.textContent=p2_score;
  }

});


max_score_selector.addEventListener("change",function(){
	max_score.textContent=max_score_selector.value;
	winningscore=Number(max_score_selector.value);
	Reset();

	
});


reset.addEventListener("click",Reset);
	 

function Reset(){
	p1_score=0;
    p2_score=0; 
     
    score_p1.textContent=0;
	score_p2.textContent=0;

	score_p1.classList.remove("winner");
	score_p2.classList.remove("winner");

	gameover= false;
	
}