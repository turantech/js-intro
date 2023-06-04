/* Comparison Operators */
console.log(5 == "5"); // true
// This returns true because == compares the values and not the types, it performs type coercion and converts the string "5" to a number 5, thus 5 == 5 is true.

console.log(5 === "5"); // false
// This returns false because === checks both the value and the type, so the number 5 is not the same type as the string "5".

console.log(5 != "5"); // false
// This returns false because 5 and "5" are equal after type coercion, so they are not different (!=).

console.log(5 !== "5"); // true
// This returns true because 5 and "5" are not strictly equal (!==), as the types are different (number vs string).

console.log(5 > 3); // true
// This returns true because 5 is indeed greater than 3.

console.log(5 < 3); // false
// This returns false because 5 is not less than 3.

console.log(5 >= 5); // true
// This returns true because 5 is indeed greater than or equal to 5.

console.log(5 <= 6); // true
// This returns true because 5 is indeed less than or equal to 6.

/* Combining Logical and Comparison Operators */
console.log(5 > 3 && 2 == "2"); // true
/*This checks if 5 is greater than 3 (which is true), and if 2 is loosely equal to "2" (which is also true, because == performs type coercion). Since both conditions are true, the overall condition evaluates to true. */

console.log(5 !== "5" && 6 <= 10); // true
/* This checks if 5 is not strictly equal to "5" (which is true, because !== checks for type as well as value), and if 6 is less than or equal to 10 (which is true). Since both conditions are true, the overall condition evaluates to true. */

console.log(3 === "3" || 7 > 10); // false
/* This checks if 3 is strictly equal to "3" (which is false, because === checks for type as well as value), or if 7 is greater than 10 (which is false). Since both conditions are false, the overall condition evaluates to false. */

console.log(4 < 2 || 3 !== "3"); // true
/* This checks if 4 is less than 2 (which is false), or if 3 is not strictly equal to "3" (which is true, because !== checks for type as well as value). Since at least one condition is true, the overall condition evaluates to true. */

console.log(!(5 > 3 && 2 == "2")); // false
/* This negates the result of (5 > 3) && (2 == "2"). As we've seen before, (5 > 3) && (2 == "2") is true, so negating it gives false. */

console.log(!(3 === "3" || 7 > 10)); // true
/* This negates the result of (3 === "3") || (7 > 10). As we've seen before, (3 === "3") || (7 > 10) is false, so negating it gives true. */

console.log((5 > 3 && !(2 === "2")) || 4 !== "4"); // true
/* This checks if 5 is greater than 3 (which is true), and if 2 is not strictly equal to "2" (which is false). The overall result of the && operation is false. It then checks if 4 is not strictly equal to "4" (which is false). The overall result of the || operation is true because one condition is true. */

console.log(7 >= "7" || (!(9 < 11) && 2 !== "2")); // true
/* This checks if 7 is greater than or equal to "7" (which is true due to type coercion), and therefore doesn't evaluate the rest of the conditions due to short-circuiting. The overall condition evaluates to true. */

/* More Complex Examples */
console.log(5 > 3 && 2 == "2" && 7 < 10); // true
/* Each part of this statement is true (5 is greater than 3, 2 is loosely equal to the string "2" due to type coercion, and 7 is less than 10), and && returns true if all its operands are true. Therefore, the entire statement is true. */

console.log(5 !== "5" && 6 <= 10 && 2 === 2); // true
/* Each part of this statement is true (5 is not strictly equal to the string "5", 6 is less than or equal to 10, and 2 is strictly equal to 2), and && returns true if all its operands are true. Therefore, the entire statement is true. */

console.log(3 === "3" || 7 > 10 || 4 !== 4); // false
/* Each part of this statement is false (3 is not strictly equal to the string "3", 7 is not greater than 10, and 4 is not strictly unequal to 4), and || returns false if all its operands are false. Therefore, the entire statement is false. */

console.log(4 < 2 || 3 !== "3" || 5 == "5"); // true
/* The first two parts of this statement are false (4 is not less than 2, 3 is not strictly unequal to the string "3"), but the last part is true (5 is loosely equal to the string "5" due to type coercion). || returns true if any of its operands are true. Therefore, the entire statement is true. */

console.log(!((5 > 3 && 2 == "2") || 9 === "9")); // false
/*The part within the parentheses is true (as we saw in the first example), but the ! negates this to false. Therefore, the entire statement is false. */

console.log(!(3 === "3" || (7 > 10 && 5 !== 5))); // true
/* The part within the parentheses is false (as we saw in the third example), but the ! negates this to true. Therefore, the entire statement is true.*/

console.log((5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8)); // true
/* The first part (5 > 3 and 2 is not strictly equal to "2") is true, and the second part (4 is not strictly unequal to 4, 7 is less than 8) is false. But the || operator returns true if any of its operands are true. Therefore, the entire statement is true. */

console.log(7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3"); // true
/* The first part of this statement is true (7 is greater than or equal to the string "7" due to type coercion), and the last part is also true (3 is loosely equal to the string "3" due to type coercion). || returns true if any of its operands are true. Therefore, the entire statement is true. */
