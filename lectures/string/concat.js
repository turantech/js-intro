var firstName = "Will";
var lastName = "Smith";
var space = " ";

// 1. + Operator

var fullNamePlus = firstName + space + lastName;

console.log(fullNamePlus);
console.log("--------------");

// 2. concat() method.
var fullNameConcat = firstName.concat(space, lastName);
console.log(fullNameConcat);

var city = "Brooklyn";
var state = "NY";
var address = city + space + state;
address = city.concat(space, state);
console.log("--------------");

// 3. Template Literals
var fullName = `${firstName} ${lastName} lives in ${city}, ${state}`;
console.log(fullName);

var num1 = 45;
var num2 = 56;

// When we add 23 to 34, we will get 57

var result = `When we add ${num1} to ${num2}, we will get ${num1 + num2}`;
console.log(result);

// 4. Assignment Operator
firstName = firstName + space + lastName;
console.log(firstName);
console.log(lastName);

var str1 = "Hello";
str1 = str1 + " world";
str1 += " world";
console.log(str1);

// Hello World
