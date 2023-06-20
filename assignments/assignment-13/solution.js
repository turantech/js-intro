// 1. combineArrays
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// 2. reverseOrder
function reverseOrder(arr) {
    return arr.reverse();
}

// 3. checkValue
function checkValue(arr, value) {
    return arr.includes(value);
}

// 4. isArray
function isArray(input) {
    return Array.isArray(input);
}

// 5. arraySlice
function arraySlice(arr, start, end) {
    return arr.slice(start, end);
}

// 6. removeLast
function removeLast(arr) {
    arr.pop();
    return arr;
}

// 7. removeFirst
function removeFirst(arr) {
    arr.shift();
    return arr;
}

// 8. addAtBeginning
function addAtBeginning(arr, value) {
    arr.unshift(value);
    return arr;
}

// 9. addAtEnd
function addAtEnd(arr, value) {
    arr.push(value);
    return arr;
}
