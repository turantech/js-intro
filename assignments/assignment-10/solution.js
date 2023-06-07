// Generate a random number of seconds between 0 and 86400.
var totalSeconds = Math.floor(Math.random() * 86400);

// Calculate hours, minutes, and seconds.
var hours = Math.floor(totalSeconds / 3600);
var remainingSeconds = totalSeconds % 3600;
var minutes = Math.floor(remainingSeconds / 60);
var seconds = remainingSeconds % 60;

// Format hours, minutes, and seconds to have two digits.
var formattedHours = hours,
    formattedMinutus = minutes,
    formattedSeconds = seconds;

if (hours < 10) {
    formattedHours = "0" + hours;
}

if (minutes < 10) {
    formattedMinutus = "0" + minutes;
}

if (seconds < 10) {
    formattedSeconds = "0" + seconds;
}

// Print the timestamp to the console.
var timestamp = `${formattedHours}:${formattedMinutus}:${formattedSeconds}`;
console.log(timestamp);

// Print a greeting based on the hour.
if (hours < 12) {
    console.log("Good morning!");
} else if (hours < 17) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
