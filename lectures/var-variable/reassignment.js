// Assignment
var address; // Declaring
address = "Manhattan, NY 11201"; // Assigning

var age;
age = 34;

// or var address = "Manhattan, NY 11201";

// Reassignment Strigs;

var welcomeMessage = "Welcome, Mr Ali";
console.log(welcomeMessage, "1st day"); // "Welcome, Mr Ali";

welcomeMessage = "Welcome Ali";
console.log(welcomeMessage, "2nd day");

welcomeMessage = "Hey Ali";
console.log(welcomeMessage, "3rd day");

// Reassignment Numbers;

var availableFunds = 1000;

// console.log(availableFunds + 3000); // it will not increment availableFunds: Prints 4000
// console.log(availableFunds); // 1000

availableFunds = availableFunds + 3000;
// Equal to availableFunds += 3000;
console.log(availableFunds); // 4000

availableFunds = availableFunds + 3000;
console.log(availableFunds); // 7000

availableFunds = availableFunds - 1500;
// Equal to availableFunds -= 1500
console.log(availableFunds);

availableFunds = availableFunds * 2;
// Equal to avialableFunds *= 2;
console.log(availableFunds); // 11000;

availableFunds = availableFunds / 2;
// Equal to availableFunds /= 2;
console.log(availableFunds); // 5500

var tasbihCounter = 0;
tasbihCounter = tasbihCounter + 1;
tasbihCounter += 1;
tasbihCounter++;
console.log(tasbihCounter);

tasbihCounter = tasbihCounter - 1;
tasbihCounter -= 1;
tasbihCounter--;
console.log(tasbihCounter);
