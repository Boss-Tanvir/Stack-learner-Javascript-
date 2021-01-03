var arr = [7, 6, 8, 5, 34, 6, 5];

var result = arr.find(function (value, index) {
  //return value == 5;
  return index == 5;
});
console.log(result);
