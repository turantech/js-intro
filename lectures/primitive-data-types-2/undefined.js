var name;
//console.log(name);

function sum(num1, num2) {
    var total = num1 + num2;
    // return total
}

var total = sum(1, 2); // undefined

/* Not passing required arguments */

function log(num1, num2) {
    console.log(num1, num2);
}

function multiply(num1, num2) {
    if (num1 === undefined && num2 === undefined) {
        return 0;
    } else if (num1 === undefined) {
        return num2;
    }

    return num1;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, undefined));
console.log(multiply(undefined, 1));
