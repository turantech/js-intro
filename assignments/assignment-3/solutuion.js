// Part 1: Basic Arithmetic Operations
var num1 = 10;
var num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Part 2: Temperature Converter
var fahrenheit = 95;
var celsius = (fahrenheit - 32) * (5 / 9);
console.log("Temperature in Celsius:", celsius);
celsius = 35;
fahrenheit = celsius * (9 / 5) + 32;
console.log("Temperature in Fahrenheit:", fahrenheit);

// Part 3: Interest Calculator
var principal = 1000;
var rate = 5;
var time = 2;
var interest = (principal * rate * time) / 100;
console.log("Interest:", interest);

// Part 4: Swapping Values
var a = 7;
var b = 3;
console.log("Before swapping: a =", a, ", b =", b);

a = a + b;
b = a - b;
a = a - b;
console.log("After swapping: a =", a, ", b =", b);

// Part 5: Implementing Mathematical Formulas
var radius = 5;
var area = 3.14 * radius * radius;
console.log("Area of circle:", area);

var length = 10;
var width = 5;
var perimeter = 2 * (length + width);
console.log("Perimeter of rectangle:", perimeter);
