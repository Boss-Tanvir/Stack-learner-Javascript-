//We can add initial value
var arr = [1, 2, 3, 4, 5];
/* var result = arr.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(result); */

function name(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
var result = name(
  arr,
  function (prev, next) {
    return prev + next;
  },
  0
);
var result2 = name(
  arr,
  function (prev, next) {
    return Math.max(prev, next);
  },
  0
);
console.log(result2);
