// 1. findCharFrequency function:
function findCharFrequency(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// 2. vowelCounter function:
function vowelCounter(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

// 3. isAlphaNumeric function:
function isAlphaNumeric(str) {
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (
            !(charCode > 47 && charCode < 58) &&
            !(charCode > 64 && charCode < 91) &&
            !(charCode > 96 && charCode < 123)
        ) {
            return false;
        }
    }
    return true;
}

// 4. isAllVowels function:
function isAllVowels(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

// 5. capitalizeVowels function:
function capitalizeVowels(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

// 6. sliceFromFirstVowel function:
function sliceFromFirstVowel(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            return str.slice(i);
        }
    }
}

// 7. areConsonantsMore function:
function areConsonantsMore(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var consonantCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            consonantCount++;
        }
    }
    return consonantCount > vowelCounter(str);
}

// 8. doubleVowels function:
function doubleVowels(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += str[i].repeat(2);
        } else {
            result += str[i];
        }
    }
    return result;
}

// 9. sumDigits function:
function sumDigits(num) {
    var numStr = String(num);
    var sum = 0;
    for (var i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    return sum;
}

// 10. preserveLetters function:
function preserveLetters(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (
            (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) ||
            (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123)
        ) {
            result += str[i];
        }
    }
    return result;
}
