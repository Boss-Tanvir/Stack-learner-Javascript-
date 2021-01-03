//Function Scoping

//Child can acccess Parent data but Parent do not access Child data.

// Parent and Child both of can  access a global variable data.

function test(n) {
  function x() {
    return n % 3 == 0;
  }
  function y() {
    return n % 5 == 0;
  }
  if (x() && y()) {
    console.log(n + " is a divisible by both 3 and 5");
  } else {
    console.log("Not a valid Number");
  }
}
test(15);
