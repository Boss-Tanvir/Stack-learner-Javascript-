// **** What is Array *******

// 44

// Array is a data structure where we can organize multiple data under a single variable.



// Travarse an Array ( 45 )

// let array = [1,2,3,4,5,6]
// var sum = 0
// for (var i = 0; i < array.length ; i++) {
//     // array[i] += array[i]
//     // array[i] = array[i] + 2
    
//     sum += array[i]
// //   console.log(array[i]); 


// }

//console.log(sum);


// Even

// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0){
//         sum += array[i]
        
//     }
   
// }
// console.log(sum);   


// Odd

// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 1){
//         sum += array[i]
        
//     }
   
// }
// console.log(sum);   




// Insert Remove and replace ( 46 )

// Search in array ( 47 )


// let arr = [1,2,3,4,5,6]

// let found = 5
// let isFound = false

// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === found) {
//        isFound = true
//        console.log('Data Found');
//        break
       
//    }
    
// }

// if(isFound === false){
  
//     console.log('Not Found');
    
// }
//Array Leteral

//  var geeky =[1,2,3,4,5]  //declaration 
//     geeky[0] = "Tanvir"  //initialization
//     geeky[1] = "Tanvir1"
//     geeky[2] = "Tanvir2"
//     geeky[30] = "Tanvir3"
// document.write(geeky[2]) 
// console.log(geeky.length); // output 31
// console.log(geeky);
// console.log(geeky.length - 1);










//Array Constructor

/* var geeky = new Array("Tanvir",20,"Asif")//declaration and initialization
document.write(geeky[1])


var geeky = new Array()   //declaration 
    geeky[0] = "Tanvir"  //initialization
    geeky[1] = "Tanvir1"
    geeky[2] = "Tanvir2"
    geeky[30] = "Tanvir3"
document.write(geeky[30]) */


//If i give a only single_numeric_value in Constructor Array------It works like length array not like Array porperty.

/* var geeky = new Array(5)
console.log(geeky) */





//Removing Array Element

/*  var geeky =[]  
    geeky[0] = "Tanvir"  
    geeky[2] = "Tanvir2"
    geeky[30] = "Tanvir3"
    delete geeky[0] 
console.log(geeky) 
 */




//Array Length property

/* var geeky =[]  
    geeky[0] = "Tanvir"  
    geeky[1] = "Tanvir1"
    geeky[2] = "Tanvir2"
    geeky[4] = "Tanvir3"
document.write(geeky.length)  */




//Array Length property

/* var geeky =[]  
geeky[0] = "Tanvir"  
geeky[1] = "Asif"
geeky[2] = "Tanim"
geeky[3] = "Taskin"
var a = geeky.length
for(let i = 0; i < a; i++){
    document.write(i + " " + geeky[i] + "<br/>")
} */



/* forEach loop   */
/* var geeky =[]  
geeky[0] = "Tanvir"  
geeky[1] = "Asif"
geeky[2] = "Tanim"
geeky[3] = "Taskin"
geeky.forEach(function(value, index){
    document.write(index + " = " + value  + "<br/>")
});
 */





// for of loop   
/* var geeky =[]  
geeky[0] = "Tanvir"  
geeky[1] = "Asif"
geeky[2] = "Tanim"
geeky[3] = "Taskin"
for (const value of geeky) {
    document.write(value + "<br/>")
} */




//Input form in Array

/* //Definig Array
var input = prompt("Enter No. of Elements")
var geek = []

//Input
for(let i = 0; i<=input; i++){
    geek[i] = prompt("Enter Name: ")
}

//Display 
for (const value of geek) {
    document.write(value + "<br>")
} */


/* //Definig Array
var input = new Array(2)
var ln = input.length

//Input
for(let i = 0; i<=ln; i++){
    input[i] = prompt("Enter Name: ")
}

//Display 
for (const value of input) {
    document.write(value + "<br>")
}
 */


//MultiDimensional  Array
/* var geek = [["Tanvir",105878,"RPI"],["Shipon",202056,"DPI"],["Momin",105678,"MPI"]]
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        document.write(geek[i][j] + " ")
    }
    document.write("<br>")
} */


/* var geek = [[],[],[]]
geek[0][0] = "Tanvir"
geek[0][1] = 105878
geek[0][2] = "RPI"
geek[1][0] = 'Momin' 
geek[1][1] = 105555
geek[1][2] = "MPI"
geek[2][0] = "Shipon"
geek[2][1] = 123456
geek[2][2] = "DPI"

 for(let i = 0; i < 3; i++){
    for(let j = 0; j<3; j++){
        document.write(geek[i][j] + " ")
    }
    document.write("<br>")
}  */





// Create Empty 2D Array
   //using Array Literal
/*  var geek = [[],[]]
   //using Array Constructor
var geek = new Array([],[])
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 2; j++){
       // document.write(geek[i][j] + " ")
        document.write(i + " " + j)
    }
    document.write("<br>")
} 
 */
          //Dont Understand @D array and input
// var geek = []
/* var rows = 3
var cols = 2
var geek = new Array(rows)
for (var i = 0; i < rows; i++) {
    geek[i] = new Array(cols)
}
for (var j = 0; j < cols; j++) {
    document.write(geek[i][j])
    
}
 */


 //concat method 


/*  var geek = ["Rahul","sumit","Rokesh"]
var geek1 = ["Rahul1","sumit1","Rokesh1"]
var geek2 = ["Rahul2","sumit2","Rokesh2"]
result = geek.concat("<br>",geek1, "<br>",geek2,"<br>","Tanvir")
document.write(result)
 */



 //join method
/*  var geek = ["Rahul","sumit","Rokesh"]
 var geek1 = geek.join(" / ")
 document.write(geek1) */


  //reverse method
/*   var geek = ["Rahul","sumit","Rokesh"]
 document.write(geek + "<br>")
 geek.reverse()
 document.write(geek)
 */


/*   //slice method
  var geek = ["Rahul","sumit","Rokesh","Tanvir","Asif"]
  var geek1 = geek.slice(1,3) 
  var geek2 = geek.slice(-3,-1) 
  document.write(geek + "<br>")
  document.write(geek1 + "<br>")
  document.write(geek2) */

  //toString method

  //Array.isArray method
 /*  var geek = ["Rahul","sumit","Rokesh"]
  var geek1 = Array.isArray(geek)
  console.log(geek1) 
 */

  //Splice method
   var geek = ["Rahul","sumit","Rokesh"]
  geek.splice(2,1,"Hp")  // 2 = index number, 1 = remove element, hp = add element
  console.log(geek) 
 

  //indexOf method
/*   var geek = ["Rahul","sumit","Rokesh"]
  var position = geek.indexOf("Asif")
  console.log(position + "<br>")

  var geek1 = ["Rahul","sumit","Rokesh"]
  var position = geek1.indexOf("sumit")
  console.log(position)

 */
 //Fill method
/*   var geek = ["Rahul","sumit","Rokesh"]
 geek.fill("Don", 2)
 console.log(geek)
  */

  //unshift method

//   var geek = ["Rahul","sumit","Rokesh"]
//   geek.unshift("Delll")
//   console.log(geek) 


   //push method
  /*  var geek = ["Rahul","sumit","Rokesh"]
   geek.push("Delll")
   document.write(geek)
 */

//shift method // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// var geek = ["Rahul","sumit","Rokesh"]
// geek.shift()
// console.log(geek) 


//pop method
/* var geek = ["Rahul","sumit","Rokesh"]
var ff = geek.pop()
document.write(geek + '<br>')
document.write(ff)

 */




//remove and add same methods
//slice
//splice
//unshift
//push
//shift
//pop


// var arr1 = [1,2,3]
// var arr2 = [4,5,6]
// var arr3 = [7,8,9]
// function name() {
//     result = arr1 + arr2 + arr3
//     console.log(result)
// }
// name()