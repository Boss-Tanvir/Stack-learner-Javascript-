/* function max(a, b, c) {
  return a + b + c;
} */
//console.log(max(40, 50, 60));

function curring(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
var result = curring(5)(5)(5);
console.log(result);
