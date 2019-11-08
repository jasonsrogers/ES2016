// Exponentiation.operator
console.log("Exponentiation.operator");
// The exponentiation operator ** is the equivalent of Math.pow(), but brought into the language instead of being a library function.
// x ** y
// produces the same result as
// Math.pow(x, y)
Examples: console.log(`Squared ${3 ** 2}`); // 9

let num = 3;
num **= 2;
console.log(`Squared ${num}`); // 9

// priority of operators will be right to left because calculating the pow is needed to apply to the number
// 2 power 2 power 3
// 2 power 8
// 256
console.log(2 ** (2 ** 3));
