function createInitials(fullName) {
    var firstNameInitial = fullName[0];
    var lastNameInitialIndex = fullName.indexOf(" ") + 1;
    var lastNameInitial = fullName[lastNameInitialIndex];
    var initial = (firstNameInitial + lastNameInitial).toUpperCase();

    return initial;
}

// var result = createInitials("Will Smith");

// console.log(`Thanks for flying with us. ${result}`);
// console.log(
//     `Dear customer ${result}. You can pick up your luggage at carousel # 7`
// );
// console.log(`Fare from JFK to Brooklyn, Downtown is 56$. ${result}`);

function sign(fullName) {
    var initials = createInitials(fullName);

    var document = `This document certifies that Mr./Ms. ${initials} has agreed to the terms and conditions outlined herein. By signing this agreement, ${initials} has demonstrated their understanding and compliance with all related regulations and obligations. Failure to adhere to these terms may result in legal consequences for ${initials}. This agreement is binding and enforceable under the laws governing contractual obligations.`;

    return document;
}

function createAvatar(fullName) {
    var initials = createInitials(fullName);

    return `${initials} |  ${fullName}`;
}

function isEvenOrOdd(number) {
    if (typeof number !== "number") {
        return "Not Valid Argument";
    }
    if (number % 2 !== 0) {
        return "Odd Number";
    }

    return "Even Number";
}

function isEvenOrOddWithConsole(number) {
    if (typeof number !== "number") {
        console.log("Not Valid Argument");
    }

    console.log("I will be printed");
    if (number % 2 !== 0) {
        return "Odd Number";
    } else {
        return "Even Number";
    }
}

isEvenOrOddWithConsole("hello");

function random1To10() {
    var randomFloat = Math.random();
    return Math.floor(randomFloat * 11);
}

console.log(isEvenOrOdd("Hello"));
