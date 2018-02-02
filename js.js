
var guess = document.getElementById("guess");
var number = document.getElementById("numdisplay");
var num = document.getElementById('num');
var score = document.getElementById("score");
var answer = Math.round(Math.random()*100);


guess.addEventListener("click", function(){
	var answer = Math.round(Math.random()*100);
	var realnum = parseInt(num.value);

	if (realnum == answer){
		number.innerText ="Congratulation!!!";
		score.innerText = parseInt(100 + 1);
		//nummer.innerHTML ="<audio autoplay autoloop loop controls style='display: none;'><source src='whistle.mp3'></audio>";
		}
		else {
			
			if(realnum > answer){ number.innerText ="Lower, plz";score.innerText = parseInt(100 - 1);
		}
		
		else if (realnum < answer){ number.innerText ="Higher, plz";score.innerText = parseInt(100 - 1);
		}
		

		
	}


});
