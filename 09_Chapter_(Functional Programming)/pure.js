//What is Pure Function?

//It Returns same result if given the same arguments
//It does not cause any observable side effects.
function pure(n) {
  return n * n; // Pure Function
}
console.log(pure(5));
var p = 100;
function notPure() {
  p = 50; // Not Pure Function
}
notPure();
console.log(p);

var point = {
  x: 20,
  y: 30,
};
function notpure2(point) {
  (point.x = 50), (point.y = 80); //Not pure Function
}
notpure2(point);
console.log(point);
