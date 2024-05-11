// Create a function called countDigitsSumDivisibleByThree  that takes two positive numbers, min and max as argument. that finds how many numbers between them have a sum of their digits that is divisible by 3.

function sumUpDigits(number) {
    if (number < 10) {
        return number;
    }

    var stringNumber = number.toString();
    var sum = 0;
    sum += parseInt(stringNumber[0]) + parseInt(stringNumber[1]);

    if (stringNumber.length === 3) {
        sum += parseInt(stringNumber[2]);
    }

    return sum;
}

sumUpDigits(12); // 3
sumUpDigits(999); // 27
sumUpDigits(1); // 1

function countDigitsSumDivisibleByThree(num1, num2) {
    var counter = 0;

    for (var i = num1; i <= num2; i++) {
        var sum = sumUpDigits(i);
        if (sum % 3 === 0) {
            counter++;
        }
    }

    return counter;
}
