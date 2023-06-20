function addTwo(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function multiplyTwo(num1, num2) {
    var product = num1 * num2;
    return product;
}

function isOdd(num) {
    var result = num % 2 !== 0;
    return result;
}

function subtractTwo(num1, num2) {
    var difference = num1 - num2;
    return difference;
}

function divideTwo(num1, num2) {
    if (num2 !== 0) {
        var quotient = num1 / num2;
        return quotient;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}

function isEven(num) {
    var result = num % 2 === 0;
    return result;
}

function power(num, exponent) {
    var result = Math.pow(num, exponent);
    return result;
}

function squareRoot(num) {
    if (num >= 0) {
        var result = Math.sqrt(num);
        return result;
    } else {
        return "Error: Square root of negative number is not allowed!";
    }
}

function maxValue(num1, num2) {
    var result;
    if (num1 > num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}

function minValue(num1, num2) {
    var result;
    if (num1 < num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}

function absoluteValue(num) {
    var result = Math.abs(num);
    return result;
}

function roundNumber(num) {
    var result = Math.round(num);
    return result;
}

function ceilNumber(num) {
    var result = Math.ceil(num);
    return result;
}

function floorNumber(num) {
    var result = Math.floor(num);
    return result;
}

function modulus(num1, num2) {
    if (num2 !== 0) {
        var result = num1 % num2;
        return result;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
