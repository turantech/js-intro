// 1. Function to print numbers from 11 to 99 in ascending order:
function printNumbers() {
    for (var num = 11; num <= 99; num++) {
        console.log(num);
    }
}

// 2. Function to print numbers between 6 and 76 that are divisible by 7:
function printDivisibleBy7() {
    for (var num = 6; num <= 76; num++) {
        if (num % 7 === 0) {
            console.log(num);
        }
    }
}

// 3. Function to print numbers between 1 and 99 that are divisible by both 3 and 5:
function printDivisibleBy3And5() {
    for (var num = 1; num <= 99; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log(num);
        }
    }
}

// 4. Function to calculate and print the squares of numbers between 20 and 40:
function printSquares() {
    for (var num = 20; num <= 40; num++) {
        var square = num * num;
        console.log(square);
    }
}

// 5. Function that prints all numbers between 1 and 99 that are divisible by either 3 or 5, but not both at the same time.
function printDivisibleBy3Or5() {
    for (var num = 1; num <= 99; num++) {
        if (
            (num % 3 === 0 && num % 5 !== 0) ||
            (num % 3 !== 0 && num % 5 === 0)
        ) {
            console.log(num);
        }
    }
}
