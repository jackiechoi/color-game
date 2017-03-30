var game = {}
var sixColorsArray = [];
var promptColor;
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message')
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function(){
	game.reset();
})

game.init = function(){
	this.setUpSquares();
	this.reset();
}
game.setUpSquares = function(){
	for(var i=0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener('click', function(){
			var clickedColor = this.style.background;
			if(clickedColor===promptColor){
				messageDisplay.innerHTML = "Correct!"
				resetButton.textContent = "Play again?"
				h1.style.background = clickedColor;
				game.changeColors(clickedColor);
			}else{
				this.style.background="#232323";
				messageDisplay.textContent = "Try Again"
			}
		})
	}
}
game.reset = function(){
	sixColorsArray = this.generateSixColors();
	promptColor = this.generatePromptColor();
	colorDisplay.innerHTML = promptColor;
	//change colors of squares
	for(var i=0; i<6; i++){
		squares[i].style.background = sixColorsArray[i];
	}
	h1.style.background = 'steelblue';
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Game';
}
game.generateSixColors = function(){
	var arr = [];
	for(var i=0; i<6; i++){
		arr.push(this.randomColor())
	}
	return arr;
}
game.randomColor = function(){
	var r = Math.floor(Math.random()*255+1)
	var g = Math.floor(Math.random()*255+1)
	var b = Math.floor(Math.random()*255+1)
	return "rgb("+r+", "+g+", "+b+")";
}
game.generatePromptColor = function(){ //pickColor
	//random number between 1 and 6
	var oneThruSix = Math.floor(Math.random()*6);
	return sixColorsArray[oneThruSix];
}
game.changeColors = function(clickedColor){
	for(var i=0; i<6; i++){
		//change all colors to match given color
		squares[i].style.background = clickedColor;
	}
}

game.init();
game.setUpSquares();
game.reset();
game.generateSixColors();
game.randomColor();
game.generatePromptColor();
game.changeColors(clickedColor);




















