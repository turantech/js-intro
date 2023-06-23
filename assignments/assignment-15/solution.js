// 1. Function to return the count of numbers from start to end (inclusive):
function getCount(start, end) {
    return end - start + 1;
}

// 2. Function to return the count of numbers between start and end (inclusive) that are divisible by 7:
function getDivisibleBy7Count(start, end) {
    var count = 0;
    for (var num = start; num <= end; num++) {
        if (num % 7 === 0) {
            count++;
        }
    }
    return count;
}

// 3. Function to return the count of numbers between start and end (inclusive) that are divisible by both 3 and 5:
function getDivisibleBy3And5Count(start, end) {
    var count = 0;
    for (var num = start; num <= end; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            count++;
        }
    }
    return count;
}

// 4. Function to return the count of numbers between start and end (inclusive) for which the square is also within the same range:
function getSquareInRangeCount(start, end) {
    var count = 0;
    for (var num = start; num <= end; num++) {
        if (num * num >= start && num * num <= end) {
            count++;
        }
    }
    return count;
}

// 5. Function to return the count of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously:
function fizzBuzz(start, end) {
    var count = 0;
    for (var num = start; num <= end; num++) {
        if (
            (num % 3 === 0 || num % 5 === 0) &&
            !(num % 3 === 0 && num % 5 === 0)
        ) {
            count++;
        }
    }
    return count;
}
