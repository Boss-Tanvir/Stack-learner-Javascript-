/* function greet(msg) {
  function greetings(name) {
    return msg + ", " + name + "!";
  }
  return greetings;
}
var gd = greet("Good Morning");
var gn = greet("Good Night");
console.log(gd("Tanvir Ahamed"));
console.log(gn("Shakib"));
 */

function base(b) {
  return function (n) {
    var result = 1;
    for (let i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}
var base10 = base(10);
console.log(base10(2));
