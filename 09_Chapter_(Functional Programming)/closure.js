// First look at Clousure

function test() {
  var x = 10; // Clousure
  return function name() {
    console.log(x);
  };
}
test();
