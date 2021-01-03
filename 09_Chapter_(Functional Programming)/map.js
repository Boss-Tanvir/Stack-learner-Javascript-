// Make a new array

var arr = [1, 2, 3, 4, 5];

/* var sqrArr = arr.map(function (value, index, arr) {
  //return Math.random() * 100;
  return value * value;
});
console.log(arr);
console.log(sqrArr);
 */

function myMap(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var element = cb(arr[i], i, arr);
    newArr.push(element);
  }
  return newArr;
}
//console.log(myMap(arr));
var qb = myMap(arr, function (value) {
  return value * 3;
});
var maxNum = myMap(arr, function (value) {
  //return (arr[index] = value + 10);
  return value * 10;
});
console.log(arr);
console.log(qb);
console.log(maxNum);
