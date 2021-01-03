//Descriptor

/* var Person = {
    name : 'Hm Nayem'
} */
//console.log(Object.keys(Person))
//var descriptor = Object.getOwnPropertyDescriptor(Person,name)
//console.log(descriptor)


//Constractor prototype
/* function Person(name) {
    this.name = name
}  
    
Person.prototype.PI = 3.1416

var p1 = new Person('Tanvir')
console.log(p1)
 */


//Instance vs Prototype members ( 126, 127 )

/* function Person(name) {
    this.name = name  // Instance Member
    this.methods = function () {
        console.log('Tanvir')
   // this.play() // We can access prototype members in instance nember.
    }
}   */

/* Person.prototype = {   // Prototype Members
    play(){    
        console.log(this.name + ' is Playing')
    
    },
    eat(){
        console.log(this.name + ' is eating')
        this.methods() // We can access instance members in prototype nember.
    }
} */
/* var p1 = new Person('Tamim')
var p2 = new Person('Sakib') */

//console.log(p1.hasOwnProperty('name'))
//console.log(p1.hasOwnProperty('play'))

/* for (const i in p1) {
  //console.log(i)
} */


//Dont Overright build in property.

// Prototypical Iheritance

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






