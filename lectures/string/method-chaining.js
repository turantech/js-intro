// var string = 5;
// console.log(string.toUpperCase());
// var number = 5 > 6;
// console.log(number.endsWith(1));

// var string1 = "12";
// console.log(string1.includes("12"));

var someString = "Hello, World! ";
var uppercasedTrimmedString = someString.trim().toUpperCase();
console.log(uppercasedTrimmedString);
console.log(someString === uppercasedTrimmedString); // false

console.log(someString.length.toLowerCase()); // Not legal as someString.lenght returns number and toLowerCase() is string method.
console.log(someString.includes("World").length); // Not legal as someString.includes() returns boolean and .length string property.
