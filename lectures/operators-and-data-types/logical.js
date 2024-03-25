// 1. prescription should be from authorized doctor
// 2. should be still valid
// 3. Insurance should be cover it, or you should have funds.
console.log(true && true); // true;
console.log(true && false); // false;
console.log(false && true); //false
consolo.log(false && false); // false
console.log(true && true && true && false); // false

console.log(3 > 2 && 2 > 1); // true && true => true
console.log(3 < 4 && 1 >= 2); // true && false => false;
console.log(3 < 4 && 1 >= 0 && 0 > 0); // true && true && false => false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false && false); // false

console.log(true || false || false); // true
console.log(true && (false || true || true || true)); // true && true => true
console.log(true || (((false && true) || true) && false)); // true || (false || true) && false => true

console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false
console.log(!!!false); // true

console.log(!true && !false); // false
console.log(!true || !false); // true
console.log(!true || !!false); // false
console.log(true && !false); // true
