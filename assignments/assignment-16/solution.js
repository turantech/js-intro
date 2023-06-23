// 1. Function to return an array of numbers from start to end (inclusive):
function getRange(start, end) {
    var result = [];
    for (var num = start; num <= end; num++) {
        result.push(num);
    }
    return result;
}

// 2. Function to return an array of numbers between start and end (inclusive) that are divisible by 7:
function getDivisibleBy7Range(start, end) {
    var result = [];
    for (var num = start; num <= end; num++) {
        if (num % 7 === 0) {
            result.push(num);
        }
    }
    return result;
}

// 3. Function to return an array of numbers between start and end (inclusive) that are divisible by both 3 and 5:
function getDivisibleBy3And5Range(start, end) {
    var result = [];
    for (var num = start; num <= end; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            result.push(num);
        }
    }
    return result;
}

// 4. Function to return an array of positive numbers between start and end (inclusive) whose square is also within the same range:
function getSquareInRange(start, end) {
    var result = [];
    for (var num = start; num <= end; num++) {
        var square = num * num;
        if (square >= start && square <= end) {
            result.push(num);
        }
    }
    return result;
}

// 5. Function to return an array of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously:
function getDivisibleBy3Or5Range(start, end) {
    var result = [];
    for (var num = start; num <= end; num++) {
        if (
            (num % 3 === 0 || num % 5 === 0) &&
            !(num % 3 === 0 && num % 5 === 0)
        ) {
            result.push(num);
        }
    }
    return result;
}
