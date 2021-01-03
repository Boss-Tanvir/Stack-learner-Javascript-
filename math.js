//Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.

//Math works with the Number type. It doesn't work with BigInt.
console.log(Math.E)
console.log(Math.PI)

var n = 4.389

console.log(Math.abs(n))  // Math.abs(x) returns the absolute (positive) value of x:

console.log(Math.floor(n)) // Math.floor(x) returns the value of x rounded down to its nearest integer:

console.log(Math.ceil(n)) // Math.ceil(x) returns the value of x rounded up to its nearest integer:

console.log(Math.round(n))  // Math.round(x) returns the value of x rounded to its nearest integer:

console.log(Math.max(400, 500, 600))
console.log(Math.min(400, 500, 200))
console.log(Math.pow(2, 3))

console.log(Math.pow(3, 5)) //Math.pow(x, y) returns the value of x to the power of y:

console.log(Math.sqrt(9)) // Math.sqrt(x) returns the square root of x:

console.log(Math.sqrt(64))

console.log(Math.round(Math.random() * 50 + 1))