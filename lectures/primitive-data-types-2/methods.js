function isInteger(number) {
    return Number.isInteger(number);
}

console.log(isInteger(1.2));
console.log(isInteger(1));
console.log(isInteger(1));
console.log(isInteger(0));
console.log(isInteger("0"));

function sumUpTwoIntegerStrings(str1, str2) {
    return parseInt(str1) + parseInt(str2);
}

console.log(sumUpTwoIntegerStrings("44", "56"));
console.log(sumUpTwoIntegerStrings("44", "56.6"));

function sumUpTwoNumberStrings(str1, str2) {
    return parseFloat(str1) + parseFloat(str2);
}

console.log(sumUpTwoNumberStrings("1.1", "2.3"));
console.log(sumUpTwoNumberStrings("2", "1"));

function countDigits(number) {
    console.log(number.toString().length);
}

countDigits(24);
countDigits(24433);
countDigits(1.2); // converted to "1.2".length => 3
