// 1. String Index Multiplier
function stringIndexMultiplier(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var length = arr[i].length;
        var product = length * i;
        sum += product;
    }
    return sum;
}

// 2. Divisibility Filter
function divisibilityFilter(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var divisibleBy3 = arr[i] % 3 === 0;
        var divisibleBy5 = arr[i] % 5 === 0;

        if ((divisibleBy3 || divisibleBy5) && !(divisibleBy3 && divisibleBy5)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// 3. Single Digit Sum
function singleDigitSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var absValue = Math.abs(arr[i]);
        if (absValue < 10) {
            sum += arr[i];
        }
    }
    return sum;
}

// 4. Binary Counter
function binaryCounter(arr) {
    var zeroes = 0;
    var ones = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroes++;
        } else if (arr[i] === 1) {
            ones++;
        }
    }
    return [zeroes, ones];
}

// 5. Unique String Filter
function uniqueStringFilter(arr) {
    var uniqueStrings = [];
    var lowerCaseStrings = [];

    for (var i = 0; i < arr.length; i++) {
        var lowerCaseStr = arr[i].toLowerCase();
        if (!lowerCaseStrings.includes(lowerCaseStr)) {
            uniqueStrings.push(arr[i]);
            lowerCaseStrings.push(lowerCaseStr);
        }
    }

    return uniqueStrings;
}

// 6. Odd Number Summation
function oddNumberSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// 7. Reverse Array
function reverseString(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

// 8. Factorial Calculator
function calculateFactorial(n) {
    var factorial = 1;
    for (var i = n; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}

// 9. Array Element Multiplier
function arrayElementMultiplier(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

// 10. Even Index Summation
function evenIndexSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum;
}
