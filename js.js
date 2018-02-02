
var guess = document.getElementById("guess");
var number = document.getElementById("numdisplay");
var num = document.getElementById('num');
var score = document.getElementById("score");
var answer = Math.round(Math.random()*100);
sc = 0;

guess.addEventListener("click", function(){
	var answer = Math.round(Math.random()*100);
	var realnum = parseInt(num.value);
	sc = sc + 1;
	if (realnum == answer){
		number.innerText ="Congratulation!!!";
		score.innerText = parseInt(100 + sc);
		sc = 100+ sc;
		//nummer.innerHTML ="<audio autoplay autoloop loop controls style='display: none;'><source src='whistle.mp3'></audio>";
		}
		else {
			
			if(realnum > answer){ number.innerText ="Lower, plz";score.innerText = parseInt(100 - sc);
		}
		
		else if (realnum < answer){ number.innerText ="Higher, plz";score.innerText = parseInt(100 - sc);
		}
		

		
	}


});
