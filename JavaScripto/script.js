var num = 4;
var correct = false;

while(correct !== true) {

    var guess = Number(prompt("Enter your guess:"));


    if (guess === num) {
        alert("YOU GOT IT RIGHT!!!");
        correct = true;
    }

    else if(guess > num) {
        alert("Too high. Try again.");
    }

    else {
        alert("Too low. Try again.");
    }

}
