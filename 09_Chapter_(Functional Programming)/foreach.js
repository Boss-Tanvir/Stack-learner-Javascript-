var arr = [1, 2, 3, 4, 5];
var sum = 0;
/*  arr.forEach(function (value, index, arr) {
  // console.log(value, index, arr);
  return (sum += value);
}); */

function add(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
var ma = add(arr, function (value, index, arr) {
  //console.log(value, index, arr);
  return (sum += value);
});
console.log(sum);

var dad = add(arr, function (value, index, arr) {
  return (arr[index] = value + 5);
});
console.log(arr);
