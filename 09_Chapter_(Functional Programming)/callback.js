function add(a, b) {
  return a + b;
}
function sample(a, b, cb) {
  c = a + b;
  d = a - b;
  var result = cb(c, d);
  return result;
}
var valueable = sample(5, 8, function (c, d) {
  return c + d;
});
console.log(valueable);

var valueable2 = sample(5, 8, function (c, d) {
  return c * d;
});
console.log(valueable2);
