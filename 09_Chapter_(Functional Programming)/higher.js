//1. We can pass Function as arguments
//2. We can return functions from another function.

function add(a, b) {
  return a + b;
}

function multiple(a, b, func) {
  c = a + b;
  d = a - b;

  function multiply() {
    var m = func(a, b);
    return c * d * m;
  }
  return multiply;
}
var e = multdiple(3, 4, add);
console.log(e());
