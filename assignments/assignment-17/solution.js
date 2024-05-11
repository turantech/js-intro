// Create a function called sumExclusiveRange that takes two parameters, min and max. The function should sum all numbers between min and max, exclusive of min and max themselves. If max is less than min, the function should return the string "Not valid range."

function sumExclusiveRange(min, max) {
    if (min > max) {
        return "Not Valid Range";
    }

    var sum = 0;

    for (var i = min + 1; i < max; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumExclusiveRange(1, 5)); // 2 + 4 = 6;
console.log(sumExclusiveRange(1, 7)); // 2 + 4 + 6 = 12;
console.log(sumExclusiveRange(8, 1)); // Not Valid Range
