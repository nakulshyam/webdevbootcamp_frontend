var set1 = -10;
var set2 = 10;
var set3 = 300;
var set4 = 5;

//Question 1//

while (set1 < 19) {
	console.log(set1);
	set1++;
}

console.log('---------------------------------------------------------------');

//Question 2//

while (set2 < 40) {
	if (set2 % 2 == 0) {
		console.log(set2);
	}

	set2++;
}

console.log('---------------------------------------------------------------');

//Question 3//

while (set3 < 333) {
	if (set3 % 2 == 1) {
		console.log(set3);
	}

	set3++;
}

console.log('---------------------------------------------------------------');

//Question 4//

while (set4 < 50) {
	if (set4 % 5 == 0 && set4 % 3 == 0) {
		console.log(set4);
	}

	set4++;
}
