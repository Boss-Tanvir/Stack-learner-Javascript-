//Object Methods
var obj = {}
obj.x = 20
obj.y = 30
obj.z = 40

//console.log(Object.keys(obj))
//console.log(Object.values(obj))
//console.log(Object.entries(obj)) // [output : Such a array]

//Make a new object 
let obj2 = Object.assign({}, obj)
obj2.x = 80
console.log(obj)
console.log(obj2)
