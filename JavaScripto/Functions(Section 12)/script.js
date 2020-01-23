//isEven

function isEven(num) {
	return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

//factorial

function factorial(num) {
	var result = 1;

	for (var i = 2; i <= num; i++) {
		result *= i;
	}

	return result;
}

//kebabToSnake

function kebabToSnake(str) {
	var res = str.replace(/-/g, '_');
	return res;
}
