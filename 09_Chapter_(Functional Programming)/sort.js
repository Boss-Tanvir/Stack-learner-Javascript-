//It don't make a new array

var arr = [0, 1, 2, 3, 6, 7, 8, 4, 5];
/* arr.sort();
console.log(arr);
 */

arr.sort(function (a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr);

/* var persons = [
  {
    name: "A",
    age: 28,
  },
  {
    name: "B",
    age: 25,
  },
  {
    name: "C",
    age: 29,
  },
];
arr.persons(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons); */

//every function
//Output only boolean

var result = arr.every(function (value) {
  return value % 2 == 0;
});
console.log(result);

//Some function

var result2 = arr.some(function (value) {
  return value % 2 == 0;
});
console.log(result2);
