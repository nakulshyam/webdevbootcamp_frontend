//printReverse()

var colors = [ 'red', 'orange', 'yellow', 'green' ];

function printReverse(array) {
	//takes an array and prints the reversed contents
	var revArray = [];

	array.forEach(function(i) {
		revArray.unshift(i);
	});
	console.log(revArray);
}

//isUniform()

var nums = [ 1, 1, 1, 1 ];
var unNums = [ 2, 1, 1, 1 ];
var alph = [ 'a', 'a', 'a' ];
var unAlphs = [ 'a', 'a', 'z', 'a' ];

function isUniform(array) {
	//returns true if all elements are equal
	controlValue = array[0];

	for (var i = 0; i < array.length; i++) {
		if (array[i] !== controlValue) {
			return false;
		}
	}
	return true;
}

//sumArray

var sampArray = [ 69, 96, 78, 90 ];

function sumArray(array) {
	var sum = 0;
	array.forEach(function(i) {
		sum += i;
	});
	console.log(sum);
}

//max()

var sampMax = [ 9, 8, 3, 4, 10, 4, 7 ];

function max(array) {
	var maxnum = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] > maxnum) {
			maxnum = array[i];
		}
	}
	return maxnum;
}
