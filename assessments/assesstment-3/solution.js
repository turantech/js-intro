/* ---- 1 ---- */
var iLoveJS = "I Love JavaScript";
var someString = "I Love JavaScript and HTML,CSS";

iLoveJS = iLoveJS.replaceAll(" ", "");
someString = someString.replaceAll(" ", "");
// console.log(iLoveJS);
// console.log(someString);

/* ---- 2 ---- */
var javascript = "javascript";
// "j".toUpperCase() + "ava" + "s".toUpperCase() + "cript" => "JavaScript"

var firstSIdx = javascript.indexOf("s");

var part1 = javascript[0].toUpperCase();
var part2 = javascript.slice(1, firstSIdx);
var part3 = javascript[firstSIdx].toUpperCase();
var part4 = javascript.slice(firstSIdx + 1);

javascript = part1 + part2 + part3 + part4;

// console.log(javascript);

/* ---- 3 ---- */
var fullName1 = "Will Smith";
//  "WS"

var fullName2 = "Barack Obama";
// "BO"

var fullName3 = "Taylor Swift";
// "TS"

// Bad console.log(fullName1[0] + fullName1[5]);

var firstNameInitial = fullName1[0];
var spaceIdx = fullName1.indexOf(" ");
var lastNameInitial = fullName1[spaceIdx + 1];
var initial = firstNameInitial + lastNameInitial;
// console.log(initial);

/* ---- 4 ---- */
// 1
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var nameFirstLetter = "z";
var nameFirstLetterIdx = alphabet.indexOf(nameFirstLetter);

var alphabetWithoutMyNameFirstCharacter1 =
    alphabet.slice(0, nameFirstLetterIdx) +
    alphabet.slice(nameFirstLetterIdx + 1);

// console.log(alphabetWithoutMyNameFirstCharacter1);

// 2
var alphabetWithoutMyNameFirstCharacter2 = alphabet.replace(
    nameFirstLetter,
    ""
);
// console.log(alphabetWithoutMyNameFirstCharacter2);

/* ---- 5 ---- */
var completeSentence = "The quick brown fox jumps over the lazy dog.";
var randomChar = "x";
var missingRandomCharString;
var randomCharIdx = completeSentence.indexOf(randomChar);
missingRandomCharString = completeSentence
    .slice(0, randomCharIdx)
    .concat(completeSentence.slice(randomCharIdx + 1));

/* ---- 6 ---- */

var randomString = "I live in NY. NY is rainyaa";
var randomChar = "a";
var randomStringLength = randomString.length;
var randomStringWithoutRandomChar = randomString.replaceAll(randomChar, "");

var randomCharCount = randomStringLength - randomStringWithoutRandomChar.length;

console.log(randomCharCount);
