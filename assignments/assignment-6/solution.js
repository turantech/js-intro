var name1 = "john doe";
var name2 = "Jane smith";
var name3 = "bob Johnson";

// For name1
var spaceIndex1 = name1.indexOf(" ");
var firstNameInitial1 = name1[0];
var lastNameInitial1 = name1[spaceIndex1 + 1];
console.log((firstNameInitial1 + lastNameInitial1).toUpperCase());

// For name2
var spaceIndex2 = name2.indexOf(" ");
var firstNameInitial2 = name2[0];
var lastNameInitial2 = name2[spaceIndex2 + 1];
console.log((firstNameInitial2 + lastNameInitial2).toUpperCase());

// For name3
var spaceIndex3 = name3.indexOf(" ");
var firstNameInitial3 = name3[0];
var lastNameInitial3 = name3[spaceIndex3 + 1];
console.log((firstNameInitial3 + lastNameInitial3).toUpperCase());
