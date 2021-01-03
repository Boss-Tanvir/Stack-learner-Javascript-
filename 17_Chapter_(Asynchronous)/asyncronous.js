// Asynchonous Meaning  (177 )

//What is Synchronous Programming ?

// Synchronous basically means that you can only execute one thing at a time.



//  What is ASynchronous Programming ?

/* 
ASynchronous mean than you can excute multiple thing at a time and you dont have to finish excuting the current thing in order to finish excuting the current thing in order to move on the next one.
 */


 // Asynchonous Action (178 )
/* 
 console.log('line 1');

 setTimeout(() => {
    console.log('line 2');
 }, 3000);
 
 setTimeout(() => {
    console.log('line 3');
 }, 5000);


 console.log('line 4');

 setTimeout(() => {
    console.log('line 5');
 }, 3000);

 console.log('line 6'); */

 // Asynchonous how to store result (179)

/*  function sayName(name) {
     let result
     setTimeout(() => {
         result = name
         console.log('hi')
     }, 2000);
 }
 let ut = sayName('Tanvir')
 console.log(ut) */


 //  Why does javascript Asynchronous ? ( 180 )

 // Javascript is a single threaded language.
 // That means Javascript process one task At a time.


  //  How JS Handle  Asynchronous ? ( 181 )

  // call stack
  // web API
  // callback / Task Queue
  // Event Loop

// V8 engine ( 182 )

//See in Picture

// How to handle asynchronous  task ( 183 )

// There mailnly Threr Ways 

// 1. callback
// 2. promise
// 3. Async Func


//  Handle collection Async Operation

//1. Async iterator
//2. Await of loop
//3. Async Generator


// What is Ajax ( 184 )

//Ajax = Asynchronous Javascript and XML ( JSON )
// URl


//  Ajax with callback ( 185 )

const xml = new XMLHttpRequest()
xml.open('get', 'https://jsonplaceholder.typicode.com/users')



xml.onreadystatechange  =  function (e) {
   if( xml.readyState === 4 ){
      if( xml.status === 200 ){
         console.log(xml.response);
      }
   }else{
      console.log(xml.status);
      
   }
}
xml.send()


function get(url, callback) {
   const xml = new XMLHttpRequest()
xml.open('get', url)

}


