function lengthOfString(str) {
    var result = str.length;
    return result;
}

function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}

function toUpperCase(str) {
    var result = str.toUpperCase();
    return result;
}

function toLowerCase(str) {
    var result = str.toLowerCase();
    return result;
}

function findSubstring(str, sub) {
    var result = str.includes(sub);
    return result;
}

function replaceSubstring(str, oldSub, newSub) {
    var result = str.replace(oldSub, newSub);
    return result;
}

function charAtPosition(str, position) {
    var result = str.charAt(position);
    return result;
}

function trimString(str) {
    var result = str.trim();
    return result;
}

function stringStartsWith(str, sub) {
    var result = str.startsWith(sub);
    return result;
}

function stringEndsWith(str, sub) {
    var result = str.endsWith(sub);
    return result;
}

function convertStringToNumber(str) {
    var result = parseInt(str);
    return result;
}

function sliceString(str, start, end) {
    var result = str.slice(start, end);
    return result;
}

function concatenateAndToUpper(str1, str2) {
    var result = str1.concat(str2).toUpperCase();
    return result;
}
