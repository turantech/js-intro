/*1. The email must contain exactly one "@" symbol.
2. Username:
    1. All characters before the "@" symbol (the username) should be alphanumeric, underscores, or dots ".".
    2. A username cannot start or end with an underscore or dot.
    3. A username cannot have a dot and an underscore together.
3. Domain:
    1.There must be exactly one dot "." after the "@" symbol (in the domain part).
    2. Other than the dot ".", all characters in the domain part must be from the alphabet (no numbers or underscores allowed).
    3. Domain (For example gmail )part should have at least 1 character.
    4. Domain extension(For example com )part should have at least 2 characters and 3 */
function isAlphabetic(char) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.includes(char.toLowerCase());
}

function isNumeric(char) {
    const numbers = "1234567890";
    return numbers.includes(char);
}

function isAllowedChar(char) {
    const allowedChars = "._";
    return allowedChars.includes(char);
}

function isValidUsername(username) {
    // Validating Username edges.
    if (
        isAllowedChar(username[0]) ||
        isAllowedChar(username[username.length - 1])
    ) {
        return false;
    }
    // Checking if username contains alphanumeric chars or dots and underscores

    for (var i = 0; i < username.length; i++) {
        var char = username[i];
        if (!isAlphabetic(char) && !isNumeric(char) && !isAllowedChar(char)) {
            return false;
        }
    }
    // Validates  dot and an underscore do not come together in username

    for (var i = 0; i < username.length - 1; i++) {
        var currentChar = username[i];
        var nextChar = username[i + 1];
        if (isAllowedChar(currentChar) && isAllowedChar(nextChar)) {
            return false;
        }
    }

    return true;
}

function isValidDomain(domain) {
    // Validates number of dots in domain part. It should be only one
    var domainParts = domain.split(".");
    if (domainParts.length !== 2) {
        return false;
    }

    // It checks if domain name part has at least 1 char.
    if (domainParts[0].length < 1) {
        return false;
    }

    // It checks if domain extension part has min 2 chars and max 3.

    if (domainParts[1].length < 2 || domainParts[1].length > 3) {
        return false;
    }

    // It validates if domain part is alphabetic

    var domainPartWithoutDot = domainParts.join("");
    for (var i = 0; i < domainPartWithoutDot.length; i++) {
        var char = domainPartWithoutDot[i];
        if (!isAlphabetic(char)) {
            return false;
        }
    }

    return true;
}

function isValidAtSign(emailParts) {
    return emailParts.length === 2;
}

function isValidEmail(email) {
    let emailParts = email.split("@");

    return (
        isValidAtSign(emailParts) &&
        isValidUsername(emailParts[0]) &&
        isValidDomain(emailParts[1])
    );
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
