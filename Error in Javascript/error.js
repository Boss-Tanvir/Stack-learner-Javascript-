// Error in Javascript ( 170 )

/* let a = 10
if( a > 5 ){
    throw new Error('Error create by me')
}
 */



/*  let b = 30
 if ( b > 25 ){
     throw new RangeError('kdmfkd')
 }

 */
 



 // Error Handiling  if  else Statement ( 171 )
/* 
 function errorHandle(v) {
     let result = Number.parseInt(v)
     if (result === v) {
        console.log(v);
                 
     }
     else{
         console.log('Wrong');
         
     }
 }
 console.log(errorHandle(57));
 */

  // Error Handiling  With try catch ( 172 )
/* 
  function makeW(text) {

    try{
        let  str =  text.trim()
        let words = str.split(' ')
        return words
    }
    catch(text){
        console.log(text.message);
        
       // console.log('Thats Wrong');
    }

 /*    let  str =  text.trim()
    let words = str.split(' ')
    return words */
  //}
  //let word = makeW(45)
 // console.log(word);



    // Throwing an Error  With try catch ( 173 )
/* 
    try{
        console.log('I am line 1');
        console.log('I am line 2');
        throw new Error('Not I am')
        console.log('I am line 3');
        console.log('I am line 4');
        console.log('I am line 5');
    }
      // Optional Catch binding ()  With try catch ( 175 )
 catch(e){
     console.log('Thats error')
 }
      // Finally block With try catch ( 174 )
    finally{
        console.log('I am Final');
        
    }
 */

      // Custom Error With try catch ( 176 )
/* 
class CustomError extends Error{
    constructor(msg){
        super(msg)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}


      try{
        console.log('I am line 1');
        console.log('I am line 2');
        throw new CustomError('Not I am')
        console.log('I am line 3');
        console.log('I am line 4');
        console.log('I am line 5');
    }
  
    catch(e){
        console.log(e)
        //console.log('Thats error')
    }


    finally{
        console.log('I am Final');
        
    }
 */




