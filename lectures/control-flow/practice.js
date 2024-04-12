var randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber);

// if number between 80 - 100, log "High",
// if number between 60 - 79, log "Medium",
// if number between 40 - 59, log "Low",
// if number between 0 - 39, log "Super Low"

if (randomNumber >= 80 && randomNumber <= 100) {
    console.log("High");
} else if (randomNumber >= 60 && randomNumber <= 79) {
    console.log("Medium");
} else if (randomNumber >= 40 && randomNumber <= 59) {
    console.log("Low");
} else {
    console.log("Super Low");
}

var something = "Something";

if (something.includes("o")) {
    console.log("o is included");
}

if (something.length === 10) {
    console.log(`String has ${something.length} charaters`);
}

if (something[2] === "m") {
    console.log("m is third character");
}
if (false) {
    console.log("Hello");
}

// Not Valid

/* else if (true) {
    console.log("hello");
};

else {
    console.log("hello")
} */
