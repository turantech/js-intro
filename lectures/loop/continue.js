for (var i = 43; i <= 99; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
}

// 43
// 44
// 45,=> skipped
// 46

// 50, => skipped

// 51

// 55, => skipped
// 56

// Print all numbers, but
// skip numbers that is divisible by 5.
// if number divisible by 5 and divisible by 4, then do not skip
for (var i = 1; i <= 30; i++) {
    if (i % 5 === 0 && i % 4 !== 0) {
        continue;
    }

    console.log(i);
}

for (var i = 5; i > 0; i--) {
    console.log(i);
}
