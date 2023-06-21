function isValidEmail(email) {
    var emailParts = email.split("@");
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var allowedChars = "._";

    var username = emailParts[0];
    var domain = emailParts[1];

    if (emailParts.length !== 2) {
        return false;
    }

    if (
        username[0] === "." ||
        username[0] === "_" ||
        username[username.length - 1] === "." ||
        username[username.length - 1] === "_"
    ) {
        return false;
    }

    for (var i = 0; i < username.length; i++) {
        var char = username[i];
        if (
            !alphabet.includes(char.toLowerCase()) &&
            !numbers.includes(char) &&
            !allowedChars.includes(char)
        ) {
            return false;
        }
    }

    for (var i = 0; i < username.length - 1; i++) {
        var currentChar = username[i];
        var nextChar = username[i + 1];
        if (
            allowedChars.includes(currentChar) &&
            allowedChars.includes(nextChar)
        ) {
            return false;
        }
    }

    var domainParts = domain.split(".");
    if (domainParts.length !== 2) {
        return false;
    }

    if (
        domainParts[0].length < 1 ||
        domainParts[1].length < 2 ||
        domainParts[1].length > 3
    ) {
        return false;
    }

    var domainPartWithoutDot = domainParts.join("");
    for (var i = 0; i < domainPartWithoutDot.length; i++) {
        var char = domainPartWithoutDot[i];
        if (!alphabet.includes(char.toLowerCase())) {
            return false;
        }
    }

    return true;
}

// Regular and valid email
console.log(isValidEmail("john.doe@example.com") === true); // Should print: true

// Valid email with numbers in username
console.log(isValidEmail("john2.doe3@example.com") === true); // Should print: true

// Valid email with underscore in username
console.log(isValidEmail("john_doe@example.com") === true); // Should print: true

// Valid email with capital letters
console.log(isValidEmail("John.Doe@Example.com") === true); // Should print: true

// Test for an email with three-letter domain extension
console.log(isValidEmail("john.doe@example.net") === true); // Should print: true

// Test for an email with two-letter domain extension
console.log(isValidEmail("john.doe@example.co") === true); // Should print: true
// Test for an email with one letter domain name
console.log(isValidEmail("john@d.com") === true); // Should print: true

// Test for an email with no "@" symbol:
console.log(isValidEmail("johndoexample.com") === false); // Should print: true

// Test for an email with multiple "@" symbols:
console.log(isValidEmail("john@doe@example.com") === false); // Should print: true

// Test for an email where username starts or ends with a dot or an underscore:
console.log(isValidEmail(".john@doe.com") === false); // Should print: true
console.log(isValidEmail("john.@doe.com") === false); // Should print: true
console.log(isValidEmail("_john@doe.com") === false); // Should print: true
console.log(isValidEmail("john_@doe.com") === false); // Should print: true

// Test for an email where username has adjacent dots or underscores:
console.log(isValidEmail("john..doe@example.com") === false); // Should print: true
console.log(isValidEmail("john__doe@example.com") === false); // Should print: true
console.log(isValidEmail("john._doe@example.com") === false); // Should print: true
console.log(isValidEmail("john_.doe@example.com") === false); // Should print: true

// Test for an email where domain does not have exactly one "." character:
console.log(isValidEmail("john@doecom") === false); // Should print: true
console.log(isValidEmail("john@doe.com.com") === false); // Should print: true

// Test for an email where domain name or extension is not of valid length:
console.log(isValidEmail("john@doe.c") === false); // Should print: true
console.log(isValidEmail("john@doe.comm") === false); // Should print: true

// Test for an email where domain name or extension contains invalid characters:
console.log(isValidEmail("john@do3.com") === false); // Should print: true
console.log(isValidEmail("john@doe.c_m") === false); // Should print: true
