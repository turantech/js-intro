var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = "- Nelson Mandela";

// Template Literal Method
var quoteTemplateLiteral = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`;

// Concat Method
var quoteConcat = part1.concat(
    " ",
    part2,
    " ",
    part3,
    " ",
    part4,
    " ",
    part5,
    " ",
    author
);

// + Method
var quotePlusOperator =
    part1 +
    " " +
    part2 +
    " " +
    part3 +
    " " +
    part4 +
    " " +
    part5 +
    " " +
    author;

// += Method
var quotePlusEqualsOperator = part1;
quotePlusEqualsOperator += " " + part2;
quotePlusEqualsOperator += " " + part3;
quotePlusEqualsOperator += " " + part4;
quotePlusEqualsOperator += " " + part5;
quotePlusEqualsOperator += " " + author;
