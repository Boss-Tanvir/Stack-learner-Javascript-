/* function some(greet, name) {
  return name.split(" ")[1] + " " + greet.split(" ")[1];
}
console.log(some("Good Morning", "Tanvir Ahamed")); */

function some(greet, name) {
  function get() {
    if (name) {
      return name.split(" ")[1];
    }
  }
  var message = greet + " " + get();
  console.log(message);
}
some("Good Morning", "Tanvir Ahamed");
