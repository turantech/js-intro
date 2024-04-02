// 1. concat()
// We will use to link(add) strings together.

// 2. includes()
var fullName = "Will Smith";
console.log(fullName.includes("T")); // false
console.log(fullName.includes(" ")); // true
console.log(fullName.includes("mit"));

var password = "Se123cret12";
console.log(password.includes("Secret")); // true
console.log(password.includes("?") || password.includes(3));
console.log(!password.includes("?") || !password.includes("/")); // true
console.log(password.includes(11)); // false

console.log("--------------");

// 3. endsWith()
console.log(password.includes(123)); // true
console.log(password.endsWith(123)); // false

console.log("--------------");

// 4. startsWith();
console.log(password.startsWith("Secret")); // false
console.log(password.startsWith("Se12")); // true

console.log("--------------");

// 5. trim();

var anotherPassword = " hftrtrhgfgdfg 75746573$$?!     ";
console.log(anotherPassword.trim());
console.log(anotherPassword === anotherPassword.trim()); // false

console.log("--------------");

var trimmedPassword = anotherPassword.trim();
console.log(trimmedPassword.includes(" ")); // true
console.log(trimmedPassword === anotherPassword); // false

// 6. trimEnd();
// 7. trimStart();

// 8. indexOf()
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet[23]); // characted => x
console.log(alphabet.indexOf("x")); // 23
console.log(alphabet.indexOf("$")); // -1
console.log(alphabet.indexOf("abc")); // 0

var firstName = "Willl";
console.log(firstName.indexOf("ll")); // 2

var animal = "TIGer";
console.log(animal.toLowerCase());
console.log(animal === animal.toLowerCase()); // false

var anotherAnimal = "elephant";
console.log(anotherAnimal.toUpperCase());
