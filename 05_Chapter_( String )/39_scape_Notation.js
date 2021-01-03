// Scape Notation ( 39 )

// let str = 'I am \'Tanvir\' '

// let str2 = 'I am \n\'Tanvir\' '
// let str3 = 'I am \t\'Tanvir\' '
// let str4 = 'I am \\\'Tanvir\' '

// console.log(str)
// console.log(str2)
// console.log(str3)
// console.log(str4)

// String Comparision ( 40 )

//  Javascript uses Lexiographical System to compare to String.
//  z,y,x,....a,          Z,Y,X........A

// console.log('z' > 'Z');
// console.log('z' > 'x');
// console.log('z' > 'a');

// console.log('aaaaaz' > 'aaaa');


// console.log('001' == 1);


// String Method ( 41 )





// let str = 'I am'
// console.log(str.charAt());

// str.charAt() method eita ki space count kore?

// let str2 = ' Tanvir'
// let c = str.concat(str2)
// console.log(c);

// let d = c.substr(5, 3)
// console.log(d);

// console.log(c.anchor('name'));
// console.log(c.big());


// console.log(c.split());
// console.log(c.split(' '));
// console.log(c.split());


// String Length ( 42 )

let str = 'HM Nayem'
let length = 0


// for (let i = 0; i < length; i++) {
//     if (str.charAt(length) == ' ') {
//         break
//     }else{
//         length++
        
//     }
    
// }


while (true) {
    if (str.charAt(length) == ' ') {
                break
            }else{
                length++
                
            }
}

