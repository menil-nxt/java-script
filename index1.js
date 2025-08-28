// four piller of oop :-
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism


// Objects

// const circle = {            // const circle = {} -> object litral syntax
//     radius: 1,
//     draw: function(){
//         console.log('draw');
//     }
// };       

// circle.draw();


// Factories

// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('factories of object');
//         }
//     }
// }

// const circle = createCircle(2);
// circle.draw();
// const circle1 = createCircle(2);
// circle1.draw();
// const circle2 = createCircle(2);
// circle2.draw();


// Constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('hello');
//     }
// }

// const another = new Circle(1);
// console.log(another);  

// Enumerating Proparity
// function Circle(radius){
//     this.radius = radius;               // this.(keyword -> create empty object)    radius(key of circle)   radius-value(value of key)
//     this.draw = function(){
//         console.log('hello');
//     }
// }

// const circle = new Circle(20); 

// for (let key in circle) {                        // First way to check proparty in circle. (Enumerate all the member in an object for that use for-in loop)
//     if (typeof circle[key] === 'function')          
//         console.log(key,circle[key]);
// }

// const keys = Object.keys(circle);               // second way to check proparty in circle. (to all the propary or keys to an object for that we use (object.keys(circle) in circle))
// console.log(keys);


// if ('menil' in circle)                      // 3. why to check proparty in circle.(for check for existence of propary an method in an object use (in operator)).
//     console.log('circle has menil');


// Abstraction

// function Circle(radius){
//     this.radius = radius;               // this.(keyword -> create empty object)    radius(key of circle)   radius-value(value of key)

//     let defaultLocation = { x : 1 , y : 1};
//     this.getdefaultLocation = function(){
//         return defaultLocation;
//     }

//     this.draw = function(){
//         console.log('hello');
//     }

//     Object.defineProperty(this, 'defaultLocation',{
//         get: function(){
//             return defaultLocation;
//         },
//         set: function(value){
//             if (!value.x || !value.y)
//                 throw new Error('invalid values');
//             defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(20); 
// circle.defaultLocation = 1;         
// circle.draw();

 
// Inheritance

// function Circle(radius){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('hello');
//     };
// }

// const another = new Circle(10);     //Circle is created every time new object(circle --> circleBase(prototype of circle) --> objectBase(Prototype of CircleBase)) --> called multilevel inheritance.



//Proparty discriptor

// let person = { name: 'menil'};
// let objectBase = Object.getPrototypeOf(person);
// let discriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');    
// //configurable:true -> you can not delete this member or propartiy, enumerable:false -> you can not see toString proparty in this, writable:true -> you can change it's value or implimantion.
// console.log(discriptor);

// example
// let person = {name:'menil'};
// Object.defineProperty(person, 'name', {
//     writable:false,
//     enumerable:true,
//     configurable:false
// });

// person.name = 'jotaniya'
// console.log(person);


// Prototype vs instance member

// function Circle (radius) {
//     // Instance member
//     this.radius = radius;

//     this.move = function(){
//         this.draw();
//         console.log('move');
//     }
// }; 
//     // Prototype member
// Circle.prototype.draw = function(){
//     console.log('hello');
// }

// const c1 = new Circle(1);
// const c2 = new Circle(2);

// Circle.prototype.toString = function() {
//     return 'Circle with radius ' + this.radius;
// }

// // object.keys only access -->(instance member)     in console -> hasOwnProperty (only instance member is true) prototype member is false
// console.log(Object.keys(c1));

// // For-In loop is access all member of c1(inscance + Prototype)
// for (let key in c1) console.log(key);


// Prototypical inheritance
// function shape (color){
//     this.color = color;
// }

// shape.prototype.duplicate = function(){
//     console.log('duplicate');
// }
// // Circle.prototype = object.create(object.prototype); after implimentation of this second line of code.
// // Circle.prototype = Object.create(shape.prototype);      // now it's inherits from shapebase to circle base .
// // Circle.prototype.constractor = Circle;

// function extend(Child,Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constractor = Child;
// }

// function Circle (radius , color) {
//     shape.call(this, color);
//      this.radius = radius;
// }

// extend(Circle,shape);

// Circle.prototype.draw = function (){
//     console.log('draw');
// }

// function Square(size) {
//     this.size = size;
// }

// extend(Square,shape);

// const s = new shape();
// const c = new Circle(1 , 'red');


// Method overriding                // Polymorphisum
// function extend(Child,Parent){
//      Child.prototype = Object.create(Parent.prototype);
//      Child.prototype.constractor = Child;
// }

// function Shape(){
// }

// Shape.prototype.duplicate = function(){
//      console.log('duplicate');
// }

// function Circle(){
// }

// extend(Circle,Shape);

// Circle.prototype.duplicate = function(){        // method overriding is work here dublicate message is overriding to circle
//     // Shape.prototype.duplicate.call(this);           
//      console.log('duplicate circle');         
// }

// function Square(){
// }

// extend(Square,Shape);

// Square.prototype.duplicate = function(){
//      console.log('duplicate square');
// }

// const shapes= [
//     new Circle(),
//     new Square()
// ];

// for (let shape of shapes)
//     shape.duplicate();


// // Mixines

// function mixin (target,...sources) {
//     Object.assign(target,...sources);
// }

// const canEat = {
//   eat: function() {
//     this.hunger--,
//     console.log('Eating')
//   }  
// };

// const canWalk = {
//     walk: function() {
//         console.log('walking')
//     }
// };

// const canSwim = {
//     swim: function() {
//         console.log('swim');
//     }
// };

// function Person (){
// }

// mixin(Person.prototype,canEat,canWalk);

// const person = new Person(); 
// console.log(person);


// function goldFish() {
// }

// mixin(goldFish.prototype,canEat,canSwim);

// const goldfish = new goldFish();
// console.log(goldfish);


// ES6 Classes

// simple code 

// function Circle (radius){
//     this. radius = radius;

//     this.draw = function(){
//         console.log('deaw');
//     }
// }


// in ES6

// class Circle {
//     constructor(radius){
//         this.radius = radius;
//         this.move = function(){
//         }
//     }
//     //instance method
//     draw(){
//         console.log('draw');
//     }
//     // static this keyword
//     static parse(str){
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }

// const c = Circle.parse('{"radius": 1}');
// console.log(c);

//private members using symbols
// const _radius = Symbol();
// const _draw = Symbol();
// class Circle {
//     constructor(radius){
//         this.radius = radius;
//     }

//     [_draw](){
//         console.log('hello world')
//     }
// }

// const c = new Circle(2);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);

// Weakmaps

// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//     constructor(radius){
//         _radius.set(this, radius);
//         _move.set(this, () => {
//             console.log('move',this);
//         })
//     }
//     draw(){
//         console.log(_radius.get(this));
//         _move.get(this)();
//         console.log('draw');
//     }
// }

// const c = new Circle(10);


// gatter and setter in ES6

// const _radius = new WeakMap();
// class Circle {
//     constructor(radius){
//         _radius.set(this, radius);    
//     }

//     get radius(){
//         return _radius.get(this);
//     }

//     set radius(value){
//         if (value <= 0) throw new Error(' invalid radius ');
//         _radius.set(this,value);
//     }
// }
// const c = new Circle(10);

// inheritance in simple way.

// class Shape {
//     constructor(color){
//         this.color = color;
//     }

//     move(){
//         console.log('move');
//     }
// }

// class Circle extends Shape{
//     constructor(color,radius){
//         super(color);
//         this.radius = radius;
//     }

//     draw(){
//         console.log('draw');
//     }
// }

// const c = new Circle('yellow',20); 


// method overriding in ES6

class Shape {
    move(){
        console.log('move');
    }
}

class Circle extends Shape {
    move(){
        super.move();
        console.log('circle move');
    }
}

const c = new Circle();