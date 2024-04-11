/* ---- Arithmetic Operations ---- */

var num1 = 5; // Example value
var num2 = 2; // Example value

// Perform addition
console.log("Addition:", num1 + num2);

// Perform subtraction
console.log("Subtraction:", num1 - num2);

// Perform multiplication
console.log("Multiplication:", num1 * num2);

// Perform division
console.log("Division:", num1 / num2);

// Calculate the remainder (modulo)
console.log("Modulo (remainder):", num1 % num2);

// Raise num1 to the power of num2
console.log("Exponentiation:", num1 ** num2);

/* ---- Using Increment and Decrement Operators ---- */

// Apply the increment operator (++) to num1
num1++;
console.log("Incremented num1:", num1);

// Apply the decrement operator (--) to num2
num2--;
console.log("Decremented num2:", num2);

/* ---- Assignment Operations ---- */

var total = 0;

// Add num1 to num2 using the += operator on total
total += num1 + num2; // Correcting previous mistake
console.log("Total after += num1 and num2:", total);

// Subtract num1 from total using the -= operator
total -= num1;
console.log("Total after -= num1:", total);

// Multiply total by num2 using the *= operator
total *= num2;
console.log("Total after *= num2:", total);

// Divide total by num1 (now incremented) using the /= operator
total /= num1; // Note that num1 was incremented earlier
console.log("Final value of total after /= num1:", total);

/* ---- Comparison Operations ---- */
// Compare if num1 is greater than num2
console.log("Is num1 > num2?:", num1 > num2);

// Determine if num1 is less than or equal to num2
console.log("Is num1 <= num2?:", num1 <= num2);

// Check whether num1 multiplied by num2 is greater than or equal to total
console.log("Is num1 * num2 >= total?:", num1 * num2 >= total);

/* ---- Understanding Variable Assignment ---- */

// Assign the result of num1 plus num2 minus total to a new variable named result
var result = num1 + num2 - total;
console.log("Value of result:", result);
