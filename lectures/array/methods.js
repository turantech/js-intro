var name = "";
var friends = [];
/* console.log(friends);
friends.push("Jamshid");
console.log(friends);
friends.push("Habib Aka");
console.log(friends);
friends.unshift("Bakhtier aka");
console.log(friends);
friends.push("John", "Chelsea");
friends.unshift("Mark", "Wayne");
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends); */

// Push => It add adds an element to the end of the array
// beginning <- [] -> end
"hello".toUpperCase().includes("e").length;

console.log(friends.push("Jon"));
console.log(friends.push("Jennifer"));
//console.log(friends.push("Jack").push("Kamal")); // Not Valid as .push does not work on Numbers.
console.log(friends.unshift("Frank"));
console.log(friends); // [Frank, Jon, Jennifer]
console.log(friends.pop().length);
console.log(friends.shift());

//  Concat

var nums1 = [1, 2, 3];
var nums2 = [4, 5, 6];

var concattedNumbers = nums1.concat(nums2);
console.log(concattedNumbers);
console.log(nums1);
console.log(nums2);

// includes

var boys = ["John", "Jack", "Mark", "Peter"];
console.log(boys.includes("Jack"));
console.log(boys.includes("ack"));

// Array.isArray()
var data = [];
console.log(Array.isArray(data));

// Letters
var letters = ["a", "b", "c", "d"];
console.log(letters.reverse());
console.log(letters);

var letters1 = ["e", "f", "g"];
console.log(letters1.toReversed());
console.log(letters1);

// Slice
// Works exactly the same as string slice method.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numbers.slice(1));
console.log(numbers);
