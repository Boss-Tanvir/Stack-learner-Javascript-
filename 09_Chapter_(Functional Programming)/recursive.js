//ati nijei nijeke call kore....such a loop
function sayHi(n) {
  if (n == 0) {
    return;
  }
  console.log("Hi");
  sayHi(n - 1);
}
sayHi(10);
