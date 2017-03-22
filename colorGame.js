var sixColorsArray = generateRandomColors();
var squares = document.querySelectorAll(".square");

var promptColor = generatePromptColor(); //pickColor
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.innerHTML = promptColor;
var messageDisplay = document.querySelector('#message')

//loop thru the squares 
for(var i=0; i < squares.length; i++){
	//add random colors to squares
	squares[i].style.background = sixColorsArray[i];
	//add click listeners to squares
	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.background;
		//if the clickedColor is equal to colorDisplay, user wins
		if(clickedColor===promptColor){
			//alert('Correct!')
			messageDisplay.innerHTML = "Correct!"
			//call change colors when correct
			changeColors(clickedColor);
		}else{
			this.style.background="#232323";
			messageDisplay.textContent = "Try Again"
		}
	})
}

function changeColors(color){
	//loop thru all squares
	for(var i=0; i<squares.length; i++){
		//change all colors to match given color
		squares[i].style.background = color;
	}
}
//pick one of 6 random colors
function generatePromptColor(){ //pickColor
	//random number between 1 and 6
	var oneThruSix = Math.floor(Math.random()*7);
	return sixColorsArray[oneThruSix];
}
//create an array of 6 rgb's
function generateRandomColors(){
	//empty array
	var arr = [];
	for(var i=0; i<6; i++){
		//get random colors 6 times and push to array
		arr.push(randomColor())
	}
	return arr;
}
//get a random rgb
function randomColor(){
	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)
	return "rgb("+r+","+g+","+b+")";

}
















