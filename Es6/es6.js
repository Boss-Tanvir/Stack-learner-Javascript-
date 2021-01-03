/* var v = `fmgfkbmfg;lbmgfb
                gmflbmgf,.b/gfbgggggggggggg
                
`

console.log(v) */


/* obj = {
    Name : "Tanvir",
    age : 17
}
var name2 = "Ahamed"
console.log("My name is " + obj.Name)
console.log(`My name is ${obj.Name}`)

console.log(`My age is ${obj.age < 18 ? 'not ' : ''}adult`)

console.log(name2.padStart(15,'a'))
console.log(name2.padEnd(15,'b'))
console.log(name2.repeat(10))

 */



 // var vs let const
 //let = we can reasign our value
  //const = we can not reasign our value

  // let and const = they create a block.



  // Arrow Function

 /*  function add(a,b) {
      return a + b
  } */

/* let add = (a, b) => a + b

console.log(add(10,10))
 */
// we can not use apply,bind,call method
// it has no own this. it refers parent this only

/* let obj = {
    name : 'HM Nayem',
    print : function()  {
        console.log(`My name is ${this.name}`)
    }
}
obj.print() */

/* let obj = {
    name : 'HM Nayem',
    print : function () {      
           setTimeout( () => {
           console.log(`My name is ${this.name}`)
              },1000)
}
}

obj.print()  */

// Default Parameter




// Custoom Eterable object
/* let obj ={ 
   suru : 1,
   ses : 10,
   [Symbol.iterator] : function () {
       let currentValue = this.suru
       return{
            next(){
                return{
                    done : currentValue > obj.ses,
                    value : currentValue++
                }
            }
       }
   }
   
}


for (const i of obj) {
    console.log(i)
}
 */


// Rest and Spread Operator ( 145 )

/*  function sum(...Rest) {
    let sum = 0
/*       for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element
        
    } 

    return sum */ 
/*  return Rest.reduce((a,b) => a + b) 
}
/*  */
//console.log(sum(1,2,3,4,5))


//Enhance ( 146 )


/* let a = 10, b = 30

let obj = {
    a,
    b,
    print(){
        console.log('hi')
    }
}
obj.print()
 */

// Destructuring ( 147 )


/* let obj = {
    Name : 'Tanvir',
    occupation : 'student',
    address : {
        City : 'Dhaka',
        country : 'Bangladesh'
    }
}

let {Name, occupation, address : {City,country}  } = obj
console.log(Name,occupation,City,country)
 
 */
 


// Object form entries ( 148 )

/* let obj = {
    a : 10,
    b : 20
}

console.log(Object.entries(obj))


let arr = [
    ['a', 10],
    ['b', 20]
]

console.log(Object.fromEntries(arr))
 */


 // Symbol ( 149  )

/*  let Toss = {
     Head : Symbol('Head'),
     TAIL : Symbol('TAIL')
 }



 */




 // Iterotor Object ( 151 )

 //arr = [1,2,3]
/* 
 function createIterator(collection) {
     let i = 0
     return{
         next(){
             return{
                 done : i >= collection.length,
                 value : collection [i++]
             }
         }
     }
 }

 let iterate = createIterator(arr)
 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())


  */

//Symbol Iterator ( 152 )


//arr = [1,2,3]

/* console.log(arr[Symbol.iterator])
console.log('str'[Symbol.iterator]) */
/* 
let iterate = arr[Symbol.iterator]()

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next()) 

let str = 'tanvir'

let Text = str[Symbol.iterator]()

console.log(Text.next())
console.log(Text.next())
console.log(Text.next())
console.log(Text.next())
console.log(Text.next()) 
console.log(Text.next())
console.log(Text.next())
console.log(Text.next()) 

 */
// For of loop ( 153 ) [Should be Iterable]


/* for (const i of arr) {
    console.log(i)
}

let str = 'tanvir'

for (const i of str) {
    console.log(i)
}
 */


//Generator ( 154 )

/* function* gen(){
    yield 1
    yield 2
    yield 3
}

let it = gen()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
 */

/*  
function* generate(collection){
    for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        yield element
    }
}

let it = generate(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) */





// Set ( 155 )

// Set is iterable so we can use for of loop
/* 
let setMethod = new  Set([1,2,3])

setMethod.add (4)
setMethod.add (5)
setMethod.add (6)
setMethod.add (6)
setMethod.add (6)



console.log(setMethod)
console.log(setMethod.size)
setMethod.delete(5)

console.log(setMethod)
//setMethod.clear(5)
//console.log(setMethod)
console.log(setMethod.keys())
console.log(setMethod.values())
console.log(setMethod.has(4))
console.log(setMethod.entries(4))

 */

 // Map ( 155 )
/* 
let mapMethod = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30],
    ['d', 40]
])
mapMethod.set('e', 'Tanvir')
mapMethod.set({Name:'Tanvir'}, 'Yes')
mapMethod.delete('a')


console.log(mapMethod.size)
console.log(mapMethod)
console.log(mapMethod.get('e'))
console.log(mapMethod.keys())
console.log(mapMethod.values())
console.log(mapMethod)

for (const [k, v] of mapMethod) {
    console.log(k, v)
}

 */


// WeekSet ( 158 ) [ Only for Object ]

//let a = {a : 10}, b = {b:20}

//let set = new Set([a,b])
//a = null
//console.log(set.has(b)) // It will be not hide your data

/* 
let set = new WeakSet([a,b])
a = null 
console.log(set) // It will be hide your data

 */




 // WeekMap ( 159 ) 

// Same as WeekSet

/* let map = new WeekMap([a,b])
a = null
console.log(WeekMap.has(b)) // It will be not hide your data
 */
/* 
let map = new WeekMap([a,b])
a = null 
console.log(set) // It will be hide your data

 */



// WeekMap ( 160 )

/* 
function extend(parent,child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constractor = child  
}

function Common(age) {
    this.age = age
}

Common.prototype = {
    play(){    
        console.log(this.name + ' is Playing')
    
    },
    eat(){
        console.log(this.name + ' is eating')
        
    }
}

function Person(name,age) {
    Common.call(this,age)  // Calling super with call method
    this.name = name
}

extend(Common,Person)

// Person.prototype = Object.create(Common.prototype)
// Person.prototype.constractor = Person

Person.prototype.player = function () {
    console.log('abc')
}

//Person2.prototype = Object.create(Common.prototype)
//Person2.prototype.constractor = Person2

//Person3.prototype = Object.create(Common.prototype)
//Person3.prototype.constractor = Person3

 function Person2(name2,age) {
     Common.call(this,age)
    this.name = age
    this.name = name2
}

function Person3(name3) {
    this.name = name3
}



var p1 = new Common('tamim')
var p2 = new Person('Sakib',35)

extend(Common,Person2)
Person2.prototype.player = function () {
    console.log('Boss')
}
var p3 = new Person2('Masrafee',45)


 */
// Class ( 161 )

/* 
class Person {
    constructor(name,age){
        this.name = name
        this.age = age 
        this.math = function () {
            
        }      
    }
    name2 = "Tanvir"
    play(){    
        console.log(this.name + ' is Playing')
    
    }
    eat(){
        console.log(this.name + ' is eating')
        
    }
}


var man = new Person('Shakib',23)
console.log(man.play())
 
 */


// Static Method ( 162 )

// We can access static method without object.
/* 
class Person {
    constructor(name,age){
        this.name = name
        this.age = age 
        this.math = function () {
            
        }      
    }
    name2 = "Tanvir"
    static play(){    
        console.log(this.name + ' is Playing')
    
    }
    eat(){
        console.log(this.name + ' is eating')
        
    }
    eat2(){
        console.log(this)
        
    }
}


var man = new Person('Shakib',23)
//console.log(man.eat2())
//Person.play()

 */


 
 
// This ( 163 )

/* eat2(){
    console.log(this)
    
} */
// If we use only this keyword in class its output undefiend.
//Or If we use only this keyword in Normal object its output window object.





// Private Data ( 164 )

/* const eat = Symbol() 
const name = Symbol() 
const age = Symbol() 

class Person {
    constructor(name,age){
        this[name] = name
        this[age] = age 
        this.math = function () {
            
        }      
    }
    name2 = "Tanvir"
    static play(){    
        console.log(this.name + ' is Playing')
    
    }
    [eat](){
        console.log(this.name + ' is eating')
        
    }
    eat2(){
        console.log(this)
        
    }
}


var man = new Person('Shakib',23)
console.log(man) */
//Person.play()
//console.log(Object.getOwnPropertyNames(age))
//let ta = Object.getOwnPropertySymbols(age)




// Private Data By WeekMap ( 165 )


 //dont understand
/* 
// 
const name = new WeakMap() 
const age = new WeakMap() 

class Person {
    constructor(name,age){
        name.set(this, name) 
        age.set(this, age) 
        this.math = function () {
            
        }      
    }
   
    eat(){
        console.log(this.name + ' is eating')
        console.log(name.get(this), age.get(this))
        
    }
    eat2(){
        console.log(this)
        
    }
}


var man = new Person('Shakib',23)
console.log(man.eat())  */


// Getter Setter ( 166 )




// Inheritance ( 167 )


/* 
class Cricketer{
    constructor(type,country){
        this.type = type
        this.country = country
    }
}

class Person extends Cricketer {
    constructor(name,age,type,country){
        super(type,country)
        this.name = name
        this.age = age 
        this.math = function () {
            
        }      
    }
    name2 = "Tanvir"
    static play(){    
        console.log(this.name + ' is Playing')
    
    }
    eat(){
        console.log(this.name + ' is eating')
        
    }
    eat2(){
        console.log(this)
        
    }
}


var man = new Person('Shakib',23,'All Rounder','Bangladesh')
console.log(man) */
//Person.play()



// Method Overriting ( 168 )

/* class Cricketer{
    constructor(type,country){
        this.type = type
        this.country = country
    }
    eat2(){
        console.log("Playing")
        
    }
}
 */
/* class Person extends Cricketer {
    constructor(name,age,type,country){
        super(type,country)
        this.name = name
        this.age = age 
        this.math = function () {
            
        }      
    }
    name2 = "Tanvir"
    static play(){    
        console.log(this.name + ' is Playing')
    
    }
    eat(){
        console.log(this.name + ' is eating')
        
    }
    eat2(){
        // Method Overriting
        console.log("Playing with me")
        
    }
}
 */
import Person from './Person'

var man = new Person('Shakib',23,'All Rounder','Bangladesh')
console.log(Person)


// Modules System ( 169 )



