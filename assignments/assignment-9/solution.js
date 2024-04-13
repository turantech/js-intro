Math.ceil(456.1234); // Rounds up to 457 because ceil always rounds up to the nearest whole number.
Math.floor(78.9123); // Rounds down to 78 because floor always rounds down to the nearest whole number.
Math.round(34.5678); // Rounds to 35 because 0.5678 is greater than 0.5.

Math.ceil(-121.4567); // Rounds up to -121. Even though it's negative, ceil moves towards the higher value (towards 0).
Math.floor(-84.1234); // Rounds down to -85. Floor moves towards the lower value, making it more negative.
Math.round(-37.6789); // Rounds to -38. Since -0.6789 is less than -0.5, it rounds to the lower whole number.

Math.ceil(789.01); // Rounds up to 790. Ceil always rounds up to the nearest whole number.
Math.floor(999.999); // Rounds down to 999. Floor always rounds down to the nearest whole number.
Math.round(3874.4999); // Rounds to 3874 because 0.4999 is less than 0.5.

Math.ceil(-7856.1); // Rounds up to -7856. Ceil moves towards the higher value (towards 0).
Math.floor(-8745.9); // Rounds down to -8746. Floor moves towards the lower value, making it more negative.
Math.round(-2934.8); // Rounds to -2935 because -0.8 is less than -0.5, rounding to the lower whole number.

Math.ceil(0.0167); // Rounds up to 1 because ceil always rounds up.
Math.floor(0.9999); // Rounds down to 0 because floor always rounds down.
Math.round(0.5534); // Rounds to 1 because 0.5534 is greater than 0.5.

Math.ceil(-0.1234); // Rounds up to 0. Ceil moves towards the higher value (towards 0).
Math.floor(-0.9876); // Rounds down to -1. Floor moves towards the lower value, making it more negative.
Math.round(-0.5543); // Rounds to -1 because -0.5543 is less than -0.5, rounding to the lower whole number.

Math.ceil(8765.1); // Rounds up to 8766 because ceil always rounds up.
Math.floor(7654.9); // Rounds down to 7654 because floor always rounds down.
Math.round(9876.5); // Rounds to 9877 because 0.5 rounds up.

Math.ceil(-5432.1); // Rounds up to -5432. Ceil moves towards the higher value (towards 0).
Math.floor(-4321.9); // Rounds down to -4322. Floor moves towards the lower value, making it more negative.
Math.round(-6543.5); // Returns -6543 because for negative numbers, -0.5 rounds towards the higher whole number (towards 0).

Math.ceil(0); // Remains 0 because it's already a whole number.
Math.floor(0); // Remains 0 because it's already a whole number.
Math.round(0); // Remains 0 because it's already a whole number.

Math.ceil(10000); // Remains 10000 because it's already a whole number.
Math.floor(10000); // Remains 10000 because it's already a whole number.
Math.round(10000); // Remains 10000 because it's already a whole number.
