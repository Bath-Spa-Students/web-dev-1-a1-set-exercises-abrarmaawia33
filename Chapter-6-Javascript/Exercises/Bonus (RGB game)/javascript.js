var numCircle = 6;
var colors = generateRandomColors(numCircle);
var circle = document.querySelectorAll(".circle");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");



resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numCircle);
	//pick a new random color from array
	pickedColor = randomColorG();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < circle.length; i++){
		circle[i].style.backgroundColor = colors[i];
	}
	//set winning color highlight back to default
	h1.style.background = "white"; 
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < circle.length; i++) {
	//add initial colors to squares
	circle[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	circle[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}	else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
}

function changeColors(colorz){
	//loop through all squares
	for(var i = 0; i < circle.length; i++){
		//change each color to match given color
		circle[i].style.background = colorz;
	}	
}

function randomColorG(){
	//picking a random number
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(genColor){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < genColor; i++){
	// get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
}