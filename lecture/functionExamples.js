function capitilize(string) {
    if (typeof string !== "string") {
        console.log(`You provided ${typeof string}`);
    } else {
        console.log(string[0].toUpperCase() + string.slice(1));
    }
}

function confirmInterviewTime(name, day, month, year) {
    console.log(
        `Hello ${name}. Your Interview is scheduled for ${month} ${day}, ${year}`
    );
}

function validatePasswordLength(password) {
    if (password.length < 8) {
        console.log("Password cannot have less than 8 chars");
    } else {
        console.log("Password length is met the requirement");
    }
}

function isEvenNumber(number) {
    if (number % 2 === 0) {
        console.log("Yes, it is even");
    } else {
        console.log("No, it is odd number");
    }
}
