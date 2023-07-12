function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function addValueToIndex(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        // [10, 9, 8] 0 +10, 1 + 9, 2 + 8 , [10, ]
        let sum = add(i, array[i]);
        result.push(sum);
    }

    return result;
}

function calculatePerimeter(width, length) {
    let sum = add(width, length);
    return multiply(2, add(width, length)); // 2 * (a + b);
}

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = add(sum, arr[i]);
    }

    return sum;
}

function calculateVolume(height, length, width) {
    // return height * length * width; // 1, 2,3

    return multiply(height, multiply(length, width)); // multiply(1, multiply(2, 3)) => multiply(1, 6) => 6
}

function calculateAreaOfCircle(radios) {
    // return Math.PI * radios * radios;
    return multiply(Math.PI, multiply(radios, radios));
}

console.log(addValueToIndex([1, 2, 3, 4]));
console.log(addValueToIndex([1, 2, 3, 4, 5]));
console.log(addValueToIndex([1, 2, 3, 9, 5]));
