JAVASCRIPT;
// 1. Creating User Profiles
function printUserProfile(userProfile) {
    for (let key in userProfile) {
        console.log(`${key}: ${userProfile[key]}`);
    }
}

// 2. Updating Inventory
function addStock(inventory, newInventory) {
    for (let item in newInventory) {
        if (inventory[item] !== undefined) {
            inventory[item] += newInventory[item];
        } else {
            inventory[item] = newInventory[item];
        }
    }
    return inventory;
}

// 3. Filtering Properties
function filterData(object, key) {
    return { [key]: object[key] };
}

// 4. Checking the Perfect Score
function perfectScore(students) {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.score === 100) {
            return true;
        }
    }
    return false;
}

// 5. Counting Occurrences
function countOccurrence(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}

// 6. Calculating Average Score
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function averageScore(scores) {
    let averageScores = {};
    for (let student in scores) {
        const averageScore = calculateAverage(scores[student]);
        averageScores[student] = averageScore;
    }
    return averageScores;
}

// 7. Finding Largest Number
function findLargest(ages) {
    let oldest = "";
    let maxAge = 0;
    for (let person in ages) {
        if (ages[person] > maxAge) {
            maxAge = ages[person];
            oldest = person;
        }
    }
    return oldest;
}

// 8. Reversing Key-Value Pairs
function reverseKeyValue(object) {
    let reversed = {};
    for (let key in object) {
        reversed[object[key]] = key;
    }
    return reversed;
}

// 9. Counting Boolean Values
function countBooleans(array) {
    let count = { true: 0, false: 0 };
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        count[value]++;
    }
    return count;
}

// 10. Calculating Total Price
function calculateTotal(prices, items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        total += prices[item];
    }
    return total;
}
