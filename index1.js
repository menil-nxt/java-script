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

function Circle(radius){
    this.radius = radius;

    this.draw = function(){
        console.log('hello');
    };
}

const another = new Circle(10);     //Circle is created every time new object(circle --> circleBase(prototype of circle) --> objectBase(Prototype of CircleBase)) --> called multilevel inheritance.



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
