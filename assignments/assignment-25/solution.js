function isAlphaNumeric(string) {
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (
            (char.charCodeAt() < 97 || char.charCodeAt() > 122) &&
            (char.charCodeAt() < 48 || char.charCodeAt() > 57)
        ) {
            return false;
        }
    }

    return true;
}
function isValidUrl(url) {
    const tlds = ["com", "io", "app", "dev", "ai", "tech", "co"];
    const parts = url.split(".");
    const lastPart = parts[parts.length - 1];

    // Validates if url has a correct number of parts. It can be  3 or 2.
    if (parts.length !== 3 && parts.length !== 2) {
        return false;
    }

    // Validates domain and protocol syntax name when url does not have a sub domain
    let domainNameStartIdx;
    if (parts.length === 2) {
        if (parts[0].startsWith("https://")) {
            domainNameStartIdx = 8;
        } else if (parts[0].startsWith("http://")) {
            domainNameStartIdx = 7;
        } else {
            domainNameStartIdx = 0;
        }
        if (!isAlphaNumeric(parts[0].slice(domainNameStartIdx))) {
            return false;
        }
        // Validates domain and protocol syntax name when url  has a sub domain
    } else {
        if (!isAlphaNumeric(parts[1])) {
            return false;
        }
        if (
            parts[0] !== "https://www" &&
            parts[0] !== "http://www" &&
            parts[0] !== "www"
        ) {
            return false;
        }
    }

    // Validates it has only allowed tlds
    const firstQuestionMarkIdx = lastPart.indexOf("?");
    const firstSlashIdx = lastPart.indexOf("/");

    if (firstSlashIdx !== -1) {
        if (!tlds.includes(lastPart.slice(0, firstSlashIdx))) {
            return false;
        }
    } else if (firstQuestionMarkIdx !== -1) {
        if (!tlds.includes(lastPart.slice(0, firstQuestionMarkIdx))) {
            return false;
        }
    } else if (firstQuestionMarkIdx !== 1 && firstSlashIdx !== 1) {
        if (!tlds.includes(lastPart)) {
            return false;
        }
    }

    return true;
}

console.log(
    isValidUrl("example.co/users/123/profile?tab=info&mode=edit") === true
);
console.log(
    isValidUrl("https://example.io/users/123/profile?tab=info&mode=edit") ===
        true
);
console.log(
    isValidUrl(
        "https://www.exampl@e.io/users/123/profile?tab=info&mode=edit"
    ) === false
);
console.log(
    isValidUrl(
        "http://www.example?.io/users/123/profile?tab=info&mode=edit"
    ) === false
);
console.log(isValidUrl("exa?mple.com") === false);
console.log(
    isValidUrl("example@.co/users/123/profile?tab=info&mode=edit") === false
);

console.log(
    isValidUrl("htt://www.example.io/users/123/profile?tab=info&mode=edit") ===
        false
);
console.log(
    isValidUrl(
        "https://blog.exampl@e.io/users/123/profile?tab=info&mode=edit"
    ) === false
);

console.log(
    isValidUrl(
        "http://wwwb.example.io/users/123/profile?tab=info&mode=edit"
    ) === false
);
console.log(
    isValidUrl("//.exampl@e.io/users/123/profile?tab=info&mode=edit") === false
);
