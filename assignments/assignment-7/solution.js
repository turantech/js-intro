/* ---- [idx] ---- */

// Accessing the Beginning Characters
var greeting = "Hello, world!";
console.log(greeting[0]); // First character: 'H'
console.log(greeting[1]); // Second character: 'e'
console.log(greeting[2]); // Third character: 'l'

// Accessing the Last Character
console.log(greeting[greeting.length - 1]); // Last character: '!'
console.log(greeting[greeting.length - 2]); // Second-to-last character: 'd'

/* ---- .concat ---- */

var greeting = "Hello, ";
var name = "Alice";
var welcomeMessage = greeting.concat(name);
console.log(welcomeMessage); // Logs "Hello, Alice"

/* ---- .endsWith ---- */

var announcement = "Today's event starts at 3 PM!";
var endsWithPM = announcement.endsWith("PM!");
console.log(endsWithPM); // Logs true

/* ---- .includes ---- */

var sentence = "Looking for the hidden gems in the city.";
var containsHidden = sentence.includes("hidden");
console.log(containsHidden); // Logs true

/* ---- .indexOf ---- */

var feedback = "This product is good!";
var updatedFeedback = feedback.replace("good", "excellent");
console.log(updatedFeedback); // Logs "This product is excellent!"

/* ---- .toUpperCase() and .toLowerCase() ---- */
var shout = "can you hear me?";
console.log(shout.toUpperCase()); // Converts to uppercase

var loud = "PLEASE LOWER YOUR VOICE";
console.log(loud.toLowerCase()); // Converts to lowercase

/* ---- .slice ---- */

var greeting = "Hello, world!";
var hello = greeting.slice(0, 5);
var world = greeting.slice(7);
console.log(hello); // Logs "Hello"
console.log(world); // Logs "world!"
