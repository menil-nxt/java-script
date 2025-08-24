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