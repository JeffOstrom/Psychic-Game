// Declarations of available Variables options
var wins = 0;
var losses = 0;
var letterGuessed = [];
var letter = "QWERTYUIOPASDFGHJKLZXCVBNM";
var appLetter = "";
var userLetter = "";
var chances = 10;

//Generate a random letter 
function randomLetter(){
	console.log()									
	return letter[Math.floor((Math.random() * letter.length))];
}
// Resets onces used 10 chances and shows guesses left

function restart(){
	chances = 10;
	letterGuessed= [];
	document.getElementById("guesses-left").innerHTML = chances;
}

//

appLetter = randomLetter();
console.log(appLetter);
//When user presses key record 
document.onkeyup = function(event){

	userLetter = event.key.toUpperCase();

	if(letter.includes(userLetter))
	{	
	
			letterGuessed.push(userLetter);
			
			document.getElementById("guesses").innerHTML = letterGuessed.join(", ");

			chances--;
			document.getElementById("guesses-left").innerHTML = chances;
			// If equal letter user wins!
			if(appLetter === userLetter){

				console.log("you win!!!");
				wins++;
				document.getElementById("wins").innerHTML = wins;
				restart();
			}
			
			// If <1 1 user losses 
			if(chances < 1){
				losses++;
				document.getElementById("losses").innerHTML = losses;
				console.log("YOU LOsE");
				restart();
			}
	} //sends notification to only enter letters
	else{
		alert("Please enter a letter only");
	}		

};