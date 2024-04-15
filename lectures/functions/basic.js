/* Average */

var num1 = 20;
var num2 = 50;
var average1 = (num1 + num2) / 2;
// console.log(average1);

var num3 = 122;
var num4 = 266;
var average2 = (num3 + num4) / 2;
// console.log(average2);

function calcAverage(num1, num2) {
    var average = (num1 + num2) / 2;
    console.log(average);
}
calcAverage(1000, 2000);
calcAverage(89, 87);

/* Tax Calculation */

var price1 = 1200;
var taxRate1 = 0.07;
var total = price1 + price1 * taxRate1;
// console.log(total);

var price2 = 1200;
var taxRate2 = 0.04;
var total2 = price2 + price2 * taxRate2;
// console.log(total2);

function calculateTotal(price, taxRate) {
    var total = price + price * taxRate;
    console.log(total);
}

calculateTotal(250, 0.07);
calculateTotal(250, 0.04);
calculateTotal(250, 0);
calculateTotal(0.07, 1200); // Wrong. Order matters
calculateTotal(1200, 0.07);

/* Custom Greeting */

console.log("Hi, Welcome to NY, Habib aka. How are you doing today!");
console.log("Hi, Welcome to Miami, Jamshid. How are you doing today!");
console.log("Hi, Welcome to SF, Azizbek.");

function greet(personName, cityName) {
    console.log(
        `Hi, Welcome to ${cityName}, ${personName}. How are you doing today! We are glad to see you!`
    );
}

greet("Ronaldo", "Tashkent");
greet("Shomurodov", "Miami");

/* Fizz Buzz */

var randomNumber1 = 75;

if (randomNumber1 % 3 === 0 && randomNumber1 % 5 !== 0) {
    console.log("Fizz");
} else if (randomNumber1 % 3 !== 0 && randomNumber1 % 5 === 0) {
    console.log("Buzz");
} else if (randomNumber1 % 3 === 0 && randomNumber1 % 5 === 0) {
    console.log("FizzBuzz");
} else {
    console.log("Boom");
}

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 !== 0) {
        console.log("Fizz");
    } else if (number % 3 !== 0 && number % 5 === 0) {
        console.log("Buzz");
    } else if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Boom");
    }
}
var randomNumber = Math.floor(Math.random() * 1001);
console.log(randomNumber);
fizzBuzz(randomNumber);
fizzBuzz(1200);
fizzBuzz(13);
/* Math */
Math.random(); // Generate number [0, 1)
Math.ceil(5); // Always rounds up

/* Find Rectangle Perimiter. */

// P = (length + width) * 2;
// P = (3 + 5) * 2 = 16;

function randomAlphabetChar() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randomIdx = Math.floor(Math.random() * 26);
    console.log(alphabet[randomIdx]);
}

randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
randomAlphabetChar();
