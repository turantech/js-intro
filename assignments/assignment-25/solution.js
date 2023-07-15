function isAlphaNumeric(string) {
    if (!string) return false;
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
// It finds the first char index of domain name when URL does not have sub domain.
function getDomainNameStartIdx(firstPart) {
    let domainNameStartIdx;
    if (firstPart.startsWith("https://")) {
        domainNameStartIdx = 8;
    } else if (firstPart.startsWith("http://")) {
        domainNameStartIdx = 7;
    } else {
        domainNameStartIdx = 0;
    }

    return domainNameStartIdx;
}

function isValidTld(lastPart) {
    const tlds = ["com", "io", "app", "dev", "ai", "tech", "co"];
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

function isValidProtocolAndSubdomain(string) {
    if (
        string !== "https://www" &&
        string !== "http://www" &&
        string !== "www"
    ) {
        return false;
    }

    return true;
}

function isValidDomainName(domain) {
    return isAlphaNumeric(domain);
}
function isValidQSPair(pair) {
    let parts = pair.split("=");
    if (parts.length > 2) {
        return false;
    }
    return isAlphaNumeric(parts[0]) && isAlphaNumeric(parts[1]);
}

function isValidQueryString(qs) {
    if (!qs) return false;
    const pairs = qs.split("&");
    for (let i = 0; i < pairs.length; i++) {
        if (!isValidQSPair(pairs[i])) return false;
    }
    return true;
}

function isValidUrl(url) {
    const parts = url.split(".");
    const splittedByQuestionMark = url.split("?");
    const length = parts.length;
    const firstPart = parts[0];
    const lastPart = parts[length - 1];

    // Validates if url has a correct number of parts. It can be  3 or 2.
    if (length !== 3 && length !== 2) {
        return false;
    }

    // Validates if url has only one question mark which is important to identify query strin part of URL

    if (splittedByQuestionMark.length > 2) {
        return false;
    }

    //Validates if url has valid query string

    if (splittedByQuestionMark.length === 2) {
        if (!isValidQueryString(splittedByQuestionMark[1])) {
            return false;
        }
    }

    // Validates domain and protocol syntax name when url does not have a sub domain
    if (length === 2) {
        let domainNameStartIdx = getDomainNameStartIdx(firstPart);
        if (!isValidDomainName(firstPart.slice(domainNameStartIdx))) {
            return false;
        }
    }
    // Validates domain and protocol syntax name when url  has a sub domain
    if (length === 3) {
        if (!isValidDomainName(parts[1])) {
            return false;
        }
        if (!isValidProtocolAndSubdomain(firstPart)) {
            return false;
        }
    }

    if (!isValidTld(lastPart)) {
        return false;
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
