function divisibleBy26(start, end) {
    for (var i = start; i <= end; i++) {
        if (i % 26 === 0) {
            return i;
        }
    }
}
console.log(divisibleBy26(45, 78));

function sumUp(star, end) {
    var total = 0;
    for (var i = 23; i <= 25; i++) {
        total = total + i;
    }

    return total;
}

console.log(sumUp(23, 25)); // 23 + 24 + 25 //

// 23; 0 + 23 = 23; total = 23;
// 24; 23 + 24 = 47; total = 47;
// 25; 47 + 25 = 72; total = 72;

function sumUpUntilDivisible23(start, end) {
    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += i;
        if (i % 23 === 0) {
            break;
            return sum;
        }
    }

    return sum;
}

console.log(sumUpUntilDivisible23(19, 25)); // 19 + 20 + 21 + 22 + 23
