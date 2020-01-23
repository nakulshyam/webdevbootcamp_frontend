var numSq = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var clrDis = document.querySelector('#clrDis');
var msgDis = document.querySelector('#message');
var resetBtn = document.querySelector('#reset');
var modeBtns = document.querySelectorAll('.mode');

init();

function init() {
	// modeBtns eventListeners
	var i = setupModeBtns();
	// setup square event listeners
	var i;
	({ i, i } = setupSqs(i));

	reset();
}

function setupSqs(i) {
	for (var i = 0; i < squares.length; i++) {
		// add click listeners
		squares[i].addEventListener('click', function() {
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				msgDis.textContent = 'Correct!';
				resetBtn.textContent = 'PLAY AGAIN';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				msgDis.textContent = 'Try Again';
			}
		});
	}
	return { i, i };
}

function setupModeBtns() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener('click', function() {
			modeBtns[0].classList.remove('selected');
			modeBtns[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'EASY' ? (numSq = 3) : (numSq = 6);
			reset();
		});
	}
	return i;
}

function reset() {
	// generate all new colors
	colors = generateRandomColors(numSq);
	// pick new random color from array
	pickedColor = pickColor();
	// change clrDis to match pickedColor
	clrDis.textContent = pickedColor;
	// change the resetBtn textContent to go back to NEW COLORS
	resetBtn.textContent = 'New Color';
	// change msgDis to be blank
	msgDis.textContent = '';
	// change colors of colors
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
}

resetBtn.addEventListener('click', function() {
	reset();
});

clrDis.textContent = pickedColor;

function changeColors(color) {
	// loop through squares
	for (var i = 0; i < squares.length; i++) {
		// change color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make array
	var arr = [];
	// add num colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return array
	return arr;
}

function randomColor() {
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
