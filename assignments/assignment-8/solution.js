// 1
var result1 = "hello".includes("e").toUpperCase();
// Invalid.
// Explanation: The .includes() method returns a boolean, not a string. Booleans do not have the .toUpperCase() method.

// 2
var result2 = "world".indexOf("o").concat("cean");
// Invalid.
// Explanation: The .indexOf() method returns a number, which does not have the .concat() method.

// 3
var result3 = "goodbye".endsWith("e").replace("e", "a");
// Invalid.
// Explanation: The .endsWith() method returns a boolean, which does not have the .replace() method.

// 4
var result4 = "example".slice(0, 3).indexOf("a");
// Valid.
// Explanation: Both .slice() and .indexOf() return strings, making this chain correctly formed.

// 5
var result5 = "space"
    .trimStart()
    .trimEnd()
    .toUpperCase()
    .slice(-1)
    .toLowerCase();
// Valid.
// Explanation: All methods in this chain operate on and return strings, making the chain correctly formed.

// 6
var result6 = "boolean".startsWith("b").toString().replace("true", "yes");
// Valid.
// Explanation: The .startsWith() returns a boolean, which is then converted to a string with .toString(), allowing .replace() to function correctly.

// 7
var result7 = "JavaScript".toLowerCase().trim().concat(" is fun");
// Valid.
// Explanation: All methods in this chain return strings, making the chain correctly formed.

// 8
var result8 = "Learning".slice(0, 4).toUpperCase().endsWith("N");
// Valid.
// Explanation: Although .toUpperCase() returns a string, which then is checked by .endsWith(), this chain is logically consistent.

// 9
var result9 = " Hello, World! ".trim().replace("World", "Everyone");
// Valid.
// Explanation: Both .trim() and .replace() operate on and return strings, making this chain correctly formed.

// 10
var result10 = "Data".concat(" Analysis").trimStart().toLowerCase();
// Valid.
// Explanation: All methods in this chain return strings, making the chain correctly formed.

// 11
var result11 = "Search".indexOf("e").toString().slice(0, 1);
// Valid.
// Explanation: The .indexOf() method returns a number, which is converted to a string with .toString(), allowing .slice() to function correctly.

// 12
var result12 = "coding".toUpperCase().startsWith("C");
// Valid.
// Explanation: The .toUpperCase() method returns a string, which is then correctly checked by .startsWith().

// 13
var result13 = "text".toUpperCase().includes(5);
// Invalid, but not due to chaining.
// Explanation: While technically the chain is valid as .toUpperCase() returns a string and .includes() can take a number (converting it to a string for comparison), the use of a number in .includes() is semantically unusual.

// 14
var result14 = "number".indexOf("n").startsWith("0");
// Invalid.
// Explanation: The .indexOf() method returns a number, which does not have the .startsWith() method.

// 15
var result15 = "trim".trimEnd().length.concat(" characters");
// Invalid.
// Explanation: The .length property returns a number, which does not have the .concat() method.

// 16
var result16 = "ReplaceAll"
    .replaceAll("l", "ll")
    .indexOf("ll")
    .toString()
    .trim();
// Valid.
// Explanation: The methods return a string, a number, and then back to a string, making the entire chain correctly linked.

// 17
var result17 = "find me".toUpperCase().includes("FIND");
// Valid.
// Explanation: After converting to uppercase, .includes() checks for the presence of a specific substring. This is a correct sequence of operations.

// 18
var result18 = " space ".trim().trimStart().trimEnd().length.toString();
// Valid.
// Explanation: The chain correctly applies string methods and finally converts a number (length) to a string.

// 19
var result19 = "EndsWith".toLowerCase().endsWith("swith");
// Valid.
// Explanation: The methods are correctly applied in sequence to operate on strings.

// 20
var result20 = "multiple words".slice(0, 8).trim().toUpperCase();
// Valid.
// Explanation: The chain is correctly formed, with each method operating on a string and returning a string.
