//First Class Function

//1. A Function can be stored in variable.
function test(a, b) {
  return a + b;
}
var sum = test; // 1
console.log(sum(5, 5));
//2. A Function can be stored in Array.
var arr = [];
arr.push(test);
console.log(arr);
console.log(arr[0](6, 6));
//3. A Function can be stored in Object.
var obj = {
  sum: test,
};
console.log(obj.sum);
console.log(obj.sum(7, 6));
//4. We can create function as need.
setTimeout(function () {
  console.log("I have created.....");
}, 2000);
//5. We can pass Function as arguments
//6. We can return functions from another function.
