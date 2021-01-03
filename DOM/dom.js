// Introduction of DOM ( 195 )


// Window object ( 196 )


// Document object ( 197 )


// Selectors Part One ( 198 )




// id, class, Tagname, Name
/* 
let id = document.getElementById('id')
console.log(id);
let classes = document.getElementsByClassName('class')
console.log(classes);
let tagName = document.getElementsByTagName('h3')
console.log(tagName);
let name = document.getElementsByName('name')
console.log(name);
 */




 // Selectors Part Two  ( 199 )


/* 
 let id = document.querySelector('#id')
console.log(id);
let classes = document.querySelector('.class')
console.log(classes);
let tagName = document.querySelectorAll('h3')
console.log(tagName);
let name = document.querySelector('name')
console.log(name);
 */




  // GetElememt Method vs query Selector  ( 200 )



/* 
let tagName = document.getElementsByTagName('h3')   //  Element Node 
console.log(tagName);
console.log(tagName.constructor.name);

let tagName2 = document.querySelectorAll('h3')  // Node { element, text, comment }
console.log(tagName2);
console.log(tagName2.constructor.name);

 */




  // Traverse DOM Elements  ( 201 )

  // parentElement,  children,  previousElementSibling,  nextElementSibling

 
/* 
  let main = document.getElementById('mainId')
  

  let parent = main.parentElement
  console.log(parent);


    let childs = main.children
  console.log(childs);
 
  let imp = document.getElementsByClassName('class')

  

  console.log(imp);

 */




 // How to Loop Throw Html Collectiom  ( 202 )
 //3 ways

 // let list = document.getElementsByTagName('li')
// let listItem = Array.from(list)
//let listItem = Array.prototype.slice.apply(list)
//let listItem = [... list]

// console.log(listItem);
/* 
listItem.forEach((li, ind) => {
  let text = li.innerHTML
  li.innerHTML = `${ind + 1 } ${text}`
}); 

 */


 // Create DOM  Element  ( 203 )


/* 
 let li = document.createElement('p')
 li.className = 'bold'
 li.setAttribute('title', 'Yes')
 li.innerHTML = 'Whatsapp'

 let list = document.getElementById('id')
 list.appendChild(li) */
 //console.log(li)



/* 
 let li = create('p', 'Whatsapp', 'bold')
 li.setAttribute('title', 'Yes')
 let list = document.getElementById('id')
 list.appendChild(li) 




 let p1 = create('p', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has`, 'red')
 */
 //let p2 = create('p', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has`, 'red')
/* 
 let para = document.getElementById('id')
 para.appendChild(p1) 

   // Insert Adjust   Element  ( 204 )
 li.insertAdjacentElement('afterbegin', p1)   // Referance W3Schools 

 function create(tagName, innerHTML, className) {
  let tag = document.createElement( tagName )
  tag.innerHTML = innerHTML
  tag.className = className || ' '
  return tag
}
 */

  // Update and Remove  ( 205 )

/* setTimeout(() => {
    li.innerHTML = li.innerHTML + `( Modified )`
    li.style.color = 'Yellow'
}, 3000);
 */

  // Clone Node  ( 206 )

//let cloneNode = li.cloneNode(true)
//cloneNode.innerHTML = 'Hey bro'
//li.appendChild(cloneNode)


// How to deals with Attribiute ( 207 )

//console.log(li.attributes);
//console.log(li.getAttributeNames());
//console.log(li.getAttributeNode('class'));

//console.log(li.className);
//console.log(li.classList);

/* 
li.setAttribute('class', 'className')
 let creation = document.createAttribute('title')
 creation.value = 'I am'
 li.setAttributeNode(creation)
 console.log();

 */
 
// Style ( 207 )
/* 
let rong = document.getElementById('color')
rong.style.color = 'red'
rong.style.fontSize = '4rem'
rong.style.backgroundColor = 'blue'
 */

// Dont Understand
/* 
let main = {
  color = 'red',
 fontSize = '4rem',
 backgroundColor = 'blue'
}
let rong = document.getElementById('color'),
[...main.children].forEach(rong => {
  Object.assign(rong.style, main)
});
Object.assign(rong.style, main)

 */




 // Event ( 209 )
/* let btn = document.getElementById('btn')
  btn.onclick = function (e) {
   console.log('tanvir');
 }  */

/*
 btn.addEventListener('click', function (e) {
   console.log('I have Clecked');
   
 }) */

/* 
 let box = document.getElementById('box')
 box.addEventListener('mousemove', function (e) {
   document.getElementById('x-value').innerHTML = e.offsetX
   document.getElementById('y-value').innerHTML = e.offsetY
   if(e.offsetY === 50 && e.offsetX){
alert('50 50')
   }
   //console.log(e);
 })
 */
/* 
 let imp = document.getElementById("color")

 btn.addEventListener('click', function (e) {
   let copy = imp.cloneNode(true)
   copy.innerHTML = 'New !!!'
      imp.appendChild(copy)
      
 }) 
 */

 // Event Dlegation ( 210 
/* 
 color.addEventListener('click', function (e) {
   e.target.remove()
 }) 

 */


 // input box ( 211 )


let name = document.getElementById('name')
name.addEventListener('keypress', function (e) {
  if(e.key === 'Enter'){
    document.getElementById('value').innerHTML = `Your Name is ${e.target.value}`
    e.target.value = ' '
  }
 
})


// Cheakbox and event Handaling ( 212 )

let cheakbox = document.getElementsByName('cheak')
//console.log(cheakbox);

var arr = [];

[...cheakbox].forEach(cheak => {
  cheak.addEventListener('change', function (e) {
    if (e.target.cheacked) {
      arr.push(e.target.value)
      console.log(arr);
      
    }  else{
      let ind = arr.indexOf(e.target.value)
      arr.splice(ind, 1)
    }
  })
});

 
 
