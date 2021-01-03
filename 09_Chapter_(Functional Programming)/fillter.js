//It can make new array

var arr = [1, 2, 3, 4, 4, 5, 5, 5, 8];
/* var newArr = arr.filter(function (value) {
  return value % 2 == 0;
});
console.log(newArr);
 */

function myFillter(arr, cb) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
var result = myFillter(arr, function (value) {
  return value > 5;
});
console.log(result);

var result2 = myFillter(arr, function (value) {
  return value % 2 == 1;
});
console.log(result2);

var result3 = myFillter(arr, function (value) {
  return value % 2 == 0;
});
console.log(result3);
