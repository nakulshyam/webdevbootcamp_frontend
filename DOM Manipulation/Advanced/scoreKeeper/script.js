var p1Btn = document.querySelector('#p1');
var p1Sco = 0;
var p1Dis = document.querySelector('#p1Dis');

var p2Btn = document.querySelector('#p2');
var p2Sco = 0;
var p2Dis = document.querySelector('#p2Dis');

var resetBtn = document.querySelector('#reset');

var numIn = document.querySelector('input');
var maxSco = document.querySelector('p span');

var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener('click', function() {
	if (!gameOver) {
		p1Sco++;
		if (p1Sco === winningScore) {
			gameOver = true;
			p1Dis.classList.add('win');
		}
		p1Dis.textContent = p1Sco;
	}
});

p2Btn.addEventListener('click', function() {
	if (!gameOver) {
		p2Sco++;
		if (p2Sco === winningScore) {
			gameOver = true;
			p2Dis.classList.add('win');
		}
		p2Dis.textContent = p2Sco;
	}
});

resetBtn.addEventListener('click', function() {
	reset();
});

function reset() {
	p1Sco = 0;
	p2Sco = 0;
	p1Dis.textContent = p1Sco;
	p2Dis.textContent = p2Sco;
	p1Dis.classList.remove('win');
	p2Dis.classList.remove('win');
	gameOver = false;
}

numIn.addEventListener('change', function() {
	maxSco.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
