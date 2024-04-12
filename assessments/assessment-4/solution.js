/* ---- 1 ---- */
// Between 1 and 10

var randomNumber1 = Math.floor(Math.random() * 10) + 1;
var randomNumber1 = Math.ceil(Math.random() * 10);

/* ---- 3 ---- */
// Between 50 and 100
// Min: 50, Max: 100

var base = 50;
var randomNumber3 = Math.floor(Math.random() * (50 + 1)) + 50;
var randomNumberCeil = Math.ceil(Math.random() * 50) + 50; // This works, but probability of getting 0 is very low.

/* ---- 4 ---- */
// Between -10 and 10
// 1. Generate number between [0, 10], inclusive.
// 2. 0 - generated number.

var numberBetween0and10 = Math.floor(Math.random() * 11);
var randomNumber4 = 0 - numberBetween0and10;

// Between -10 and 5; -5 and 5;
// 1. Add absolute values: 10 + 5 = 15;
// 2. Generate number between [0, 15];
// Add generated number to -10;

var numberBetween0and15 = Math.floor(Math.random() * 16);
var randomNummber4a = -10 + numberBetween0and15;
