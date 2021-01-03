/* function test(a, b, c) {
  return a + b + c;
}
console.log(test(10, 4, 5)); */

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var sum = 0;

function name(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
var ret1 = name(arr1);
var ret2 = name(arr2);
var ret3 = name(arr3);

console.log(ret1);
console.log(ret2);
console.log(ret3);
