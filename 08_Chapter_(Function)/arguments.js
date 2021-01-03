/* function add(a,b) {
   var result = a + b
   console.log(result) 
}
add(15,15) */

/* var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var sum = 0;

function name(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
name(arr1);
name(arr2);
name(arr3);
 */

/* function test(a, b, c) {
  console.log(arguments);
}
test(); */

/* 
function test() {
  console.log(arguments);
}
test(4, 5, 6, 7, 2, 7, 5);
 */

var sum = 0;
function test(a, b, c) {
  //console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    //console.log(arguments[i]);
    sum += arguments[i];
  }
  console.log(sum);
}
test(10, 4, 5);
