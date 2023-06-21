//1

function splitByComma(str) {
    return str.split(",");
}

//2

function joinWithDash(arr) {
    return arr.join("-");
}

// 3

function splitSentenceIntoWords(sentence) {
    return sentence.split(" ");
}

// 4

function createCamelCase(str) {
    var words = str.split(" ");
    words[0] = words[0].toLowerCase();

    for (var i = 1; i < words.length; i++) {
        var word = words[i];

        words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return words.join("");
}

// 5

function splitAndReverse(str, separator) {
    return str.split(separator).reverse().join(separator);
}

// 6

function replaceSpacesWithUnderscore(str) {
    return str.split(" ").join("_");
}

// 7
function splitByMultipleCharacters(str, characters) {
    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        str = str.split(char).join("&");
    }

    return str.split("&");
}

// 8
function countWordsInSentence(sentence) {
    return sentence.split(" ").length;
}

// 9
function swapFirstAndLastName(fullName) {
    var parts = fullName.split(" ");
    var temp = parts[0];
    parts[0] = parts[1];
    parts[1] = temp;

    return parts.join(",");
}

// 10
function createHashtag(str) {
    var words = str.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase + words[i].slice(1);
    }
    return `#${words.join("")}`;
}
