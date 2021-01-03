//Object Literal
function create(width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("Yes....It rectenguler");
      console.log("Yes....Its width : " + this.width);
      this.draw2();
    },
    draw2: function () {
      console.log("Yes....Its height : " + this.height);
    },
  };
}
var rect1 = create(20, 30);
//rect1.draw();
var rect2 = create(60, 70);
//rect2.draw();
var rect3 = create(80, 90);
//rect3.draw();


//Object Constractor

var Rectengle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("Yes....It rectenguler");
    console.log("Yes....Its width : " + this.width);
    this.draw2();
  };
  this.draw2 = function () {
    console.log("Yes....Its height : " + this.height);
  };
};
var rect4 = new Rectengle(5, 10);
rect4.draw();


var math = function (jog,biog,gun,vag) {
 this.jogfol = jog + biog + gun + vag

 this.jogman = function () {
   console.log("Answer : " + this.jogfol)
 }
}
var ans = new math(5,5,5,5)
//ans.jogman()




//New Keyword

 
function myfunc(c,d) {
  console.log(this.a + this.b +c + d)
}

//Call
myfunc.call({a:20,b:30},20, 20)

//Apply
myfunc.apply({a:20,b:30}, [20, 20])

//Bind
myfunc.bind({a:20,b:30},20,20)()
var testBind = myfunc.bind({a:20,b:30})
testBind(20,20)


//Pass by value
//call by value




//Abstraction

//Private Properties in javascript  
        
/* var Rectengle = function (width, height) {
  this.width = width;
  this.height = height;


  var draw2 = function () {
    console.log("Yes....Its height : " + this.height);
  };
}.bind(this);

this.draw = function () {
  console.log("Yes....It rectenguler");
  console.log("Yes....Its width : " + this.width);
  this.draw2();
};

var rect7 = new Rectengle(5, 10);
rect7.draw()

 */






