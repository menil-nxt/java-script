//this is my first java-script code.
console.log('hello world');

let name = 'Menil'
console.log(name);
/*that can not be a reserved keyword.
should be meaningful (variable_name).
cannot start with number (1name) is not valid.
cannot contation space and hypen(~)
firstword start with is lowercase and second word is starting with uppercase  it is called (camel notation)->(ex - let firstName)
*/

let interestRate = 0.03;
interestRate=1;
console.log(interestRate);

let firstName = 'menil'; // string
let age = 20; // Number
let rightLeft = true; // Boolean
let lastName = null; // Null (Object)
let secondName = undefined; // Undefined (whenever we are not pass any value its undefined value.)

// Object :-

let person = {
    name: 'Menil',
    age: 20
};
console.log(person); 

//Dot Natation
person.name = 'Jotaniya';
console.log(person.name)

// Brecket Natation
person['name'] = 'ganesh'
console.log(person.name);

// Array :-

let selectedColors = ['Red','Blue','Green'];
selectedColors[3] = 1;  // you can give any type in Array like (number,string,boolean,etc...)
selectedColors[4] = true;
console.log(selectedColors);


// Function :-

// Perfoming a simple task for understand function
// declaring a function
function great(name,age){
    console.log('hello '+name+' '+age);
}

// calling a function
great('Menil Jotaniya',20);
great('Narendrabhai',43);


// calculating a task with function.
function squre(number){
    return number*number;
}
console.log(squre(2));


// Operators :-

// Arithmetic operator.
console.log('Arithmetic');


let x = 3;
let y = 4;

console.log(x + y); // Adition operator 
console.log(x - y); // Subtract operator 
console.log(x * y); // Multipication operator 
console.log(x / y); // Division operator 
console.log(x % y); // Modulo (Reminders of division) operator 
console.log(x ** y); // (x power y) Exponentiation operator 


// Increment (++)
console.log(++x); //value of x is increment by 1 first than it is seen on console.
console.log(x++); // Only in this line value of x is increment by 1 but not show in console. 
console.log(x); // for (x++) you want to console than print this line. 

// Decrement (--)
console.log(--y); // value of y is decrement by 1 first than it is seen on console.
console.log(y--); // only in this line value of y is decriment by 1 but not show in console.
console.log(y); // for (y--) you want to console thna print this line.


// Assignment operator.
console.log('Assignment');


let a = 10; // here (=) is assignment operator value of x is 10.

x = a + 1; // here line 97 or 98 both are equal.
// a += 1;
// a -= 1;
// a *= 2;
// a /= 2;
console.log(x);

// Comparisun Operator
console.log('Comparisun');

let b = 10

// Relational Operator
console.log(b > 0);
console.log(b >= 10);
console.log(b < 10);
console.log(b <= 10);

// Equality
console.log('Equality');
console.log(b === 10); // equal to check type or value both.
console.log(b !== 10); // not equal to
console.log(b == 10); // equal check only value

// strict Equality (Type + value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality (value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
console.log(false == 1);

// Ternary operator (Conditionnal)
console.log('Ternary');
/* If a customer has more than 100 points thay are a "Gold" customer ,
 otherwise thay are a "silver" customer*/

let points = 110;
let check = points > 100 ? 'Gold' : 'Silver';
console.log(check);

// Logical operator
console.log('Logical');

// Logical AND (&&) return true if both operands are true 
console.log(true && true);

let highIncome = true ;
let goodCreditScore = true ;
let eligibleForLone = highIncome || goodCreditScore;
console.log(eligibleForLone);


// Not (!)
let AplicibleForLone = !eligibleForLone;
console.log(AplicibleForLone)


// Falsy ( it's falsy not false both are diffrent.)
// undefined,null,0,false,'',not a number.
// Anything that is not falsy -> truthy.
// Short-circuiting

let userColor = 'red';
let selectedColor = 'blue';
console.log(userColor || selectedColor);

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011 (Bitwise OR)
// 4 = 00000000 (Bitwise AND)

// read , write , execute
//00000100,00000110,00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);


console.log(1 | 2); // (|) is a Bitwise OR.
console.log(1 & 2); // (|) is a Bitwise AND.

// Operator Precedence
let no = 1+(2*3);
console.log(no)

// Exercise = swapping to variable

let m = 'red';
let n = 'blue';

let c = m;
m = n;
n = c;

console.log(m);
console.log(n);


// 2 types of conditional statement (1. if...else , 2. switch...case.)
// 1. if...else
 
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!


let hour = 10;
if (hour >= 6 && hour < 12){
    console.log('Good Morning')
}
else if(hour >= 12 && hour < 18){
    console.log('Good Afternoon')
}
else{
    console.log('Good Evening')
}


// Switch....Case

let role = 'guest';

switch (role){
    case 'guest':
        console.log('Guest User');
        break;
    
    case 'modrator':
        console.log('Modrator User');
        break;
    
    case 'agent':
        console.log('Agent User');
        break;
    
    default:
        console.log('Unknown User');
}

// Loops -> For , While , Do...while ,  For...in  , For...of.

// For loop

for (let i = 0; i < 5; i++){
    if (i % 2 !==0){
        console.log('Hello World',i);
    }
}

for (let i = 5; i >= 1; i--){
    if (i % 2 !==0){
        console.log('Hello World',i);
    }
}

// while loop

// let i = 0 ;
// while(i <= 5){
//     if (i % 2 !==0)
//     console.log('Menil',i);
//     i++;
// }

//Do...While loop

// let i = 0;
// do{if (i % 2 !==0)
//       console.log('Menil',i);
//       i++;
// } while (i <= 5);

// For...in loop (for this loop first of all we have one object)
//for..in loop
const agent = {
    name : 'Menil',
    age : 30
};

for (let key in agent)
    console.log(key,agent[key]);

// for...of loop
const colors = ['red','blue','green'];
for (let color of colors)
    console.log(color);

// Break and continue

// Break keyword 
let i = 0;
while (i <= 10){
    //if (i === 5) break; // with break keyword we break the loop 

    if (
        i === 6){
        i++;
        continue; // and with continue keyword we jump to next iteration means (skip that iteration)
    }
    console.log(i);
    i++;
}

// Objects

// It's called Object-Oriented Programming(OOP).
// object oriented programming means (where we have program as a collection of objects that talk to each other to perfome some functionality) 

// const circle = {
//     radius: 1,     // object inside variable declaration (variable_name: value of that variable)
//     location: {     // Object inside another object.
//         x: 1,
//         y: 1        
//     },
//     isVisible: true,

//     // is a function as part an object we call that function method means (function name == method name)<--(inside object).
//     draw: function(){       // object inside declare function (function_name: function_keyword(parameter){"message"})
//         console.log('Hello Object inside Fuction')
//     }
// }

// circle.draw(); // draw method of a circle object.


// Factory Functions(factory produce product as this factory fuction produce objects)

// camel natation => oneTwoThreeFour    (first word is in small latters, after that every word first latter is capital letter.)
// Pascal natation => OneTwoThreeFour (first latter of every word is uppercase)

// logic for create multiple objects with one function call.
function creatCircle(radius){
    return{
        radius,  // like (radius: radius);
        draw(){  // like (function function_name(perameter){code}) -> function draw(){'message'}
            console.log('menil');
        }
    }
}

// where you want create object for circle(like -> circle1,circle2) at that time call this function. 
const circle1 = creatCircle(3);
console.log(circle1); 

const circle2 = creatCircle(2);
console.log(circle2);

const circle3 = creatCircle(56);
console.log(circle3);

// example of factory function
console.log('Factory function');

function squre(height,width){
        return {
            height,
            width
        }
}


const calculate1 = squre(10,56);
console.log(calculate1);


// Constructor Functions
console.log('Constructor Function');

function Circle(radius){
    this.radius = radius;  // in constructor we use (this) keyword. inside this keyword we pass object propartis .
    this.draw = function(){
        console.log('menil');
    }
}
Circle.call({},1);   // with call function (it's create empty object and explicitly pass aruments.)
Circle.apply({},[1,2,3])   // with apply function (it's create empty object and explicitly pass argument inside in one array([1,2,3,4...]).) 
const menu = new Circle(4); // here when you call a constructor function at that time you must write (new) keyword
console.log(menu);


// Dynamic nature of object in java-script(we can add,delete(methos or proparties))

// const uno = {
//     radius: 1
// };

// uno.color = 'yellow';
// uno.draw = function(){
//     console.log('menil');
// }

// // delete uno.color;
// // delete uno.draw;

// console.log(uno);

// Constructor Propartys
// new string(); // '' , " " , ``
// new boolean(); // true , false
// new number(); // 1,2,3,4...

// let obj = {value:10};
// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

const circle = {
    radius: 1,
    draw(){
        console.log('message');

    }
};

// enumerating

// for (let key in circle)
//     console.log(key,circle[key]);

// for (let key of Object.keys(circle))
//     console.log(key);

// for (let entry of Object.entries(circle))
//     console.log(entry);
 
// if ('radius' in circle) console.log('yes'); // if proparity is exists in circle object than print yes
// if ('color' in circle) console.log('yes');  // here proparity is not exist in circle object. 


// cloning an object

// const another = {}
// for (let key in circle)
//     another[key]=circle[key]; //  another['radius'] = circle['radius']; => circle object all Propartiys are copies to another object.(circle propartie s->another proparties)

// Another why(short wahy to assien proparties circle to another)
// const another = Object.assign({
//     color: 'red'        // here an empty object.assign({ you pass new method,proparties,object etc...} ,circle,java -> or with circle here you pass one or more objects)
// },circle); 

// another simplest wahy to clone one object to anotheer object.
// const another = { ...circle}; // here (...)three dots are spread operator use with this operator you can colne .

// console.log(another);

// Primitive string
const message1 = 'This is my first string';

// object string
const another = new String('hi');
 

//date
const now = new Date();
const date1 = new Date('may 11 2013 09:00');
const date2 = new Date(2018,4,11,9,0);

 now.setFullYear(2015);




// Arrays

// Adding Elements in Array
  const number = [3,4];

// end of array
number.push(5,6);

// begining of array
number.unshift(1,2);

// middle of array
number.splice(2,0,'a','b');

console.log(number);

// Finding elements in array with index (Primitive type)
const numbers = [1,2,3,4,1]
console.log(numbers.indexOf(1)); // checking index
console.log(numbers.lastIndexOf(1)); // if two same number are in one array or you want to cheak second same element index
console.log(numbers.indexOf(1) !== -1); // if this expression is true than 1 is exist in this array
console.log(numbers.includes(1)); // very simple why to check with include keyword if element exist or not 


// Finding elements in array with index (Refrence type)
const courses =[
    { id: 1, name:'a'},
    { id: 2, name:'b'},
];

const course = courses.findIndex(function(course){
    return course.name === 'a';
});

console.log(course);

// Arrow function

// const game = courses.findIndex(game => game.name === 'b');
// console.log(game);

// removing elements in array

const number3 = [1,2,3,4,5];
// end of array
const last = number3.pop();
// begining of array
const first = number3.shift();
// middle of array
const middle = number3.splice(2,1);

console.log(number3);




// Emptying an arrays

let num = [1,2,3,4,5];
 
// solution 1           // this solution is good but if you have one refrence than it's work
// num = [];  

// solution 2              //this solution is better than every solutions
// num.length = 0;              

// solution 3
// num.splice( 0, num.length);    // this also not better solution for this .

// solution 4
//  while (num.length > 0)          // this solution is not good because is loop is run every time for pop
//      num.pop();

console.log(num);


// how to combining and slicing tow array

// concatation
// console.log('concatation');
// const first1 = [1,2,3];
// const second2 = [4,5,6];

// const combined = first1.concat(second2);


// spread operator
// const combined = [ ...first1 , second2];
// console.log(combined);

// Iterating an array

// for  (let value of first1)      //with for
//     console.log(value);

// first1.forEach((value,index)=>console.log(index,value));  // with forEach


// joining array
// const numberS = [1,2,3];
// const joined = numberS.join(',');
// console.log(joined);

// const message2 = 'this is my first joining array program';
// const parts = message2.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

// shorting array       (normal array)
// const haho = [2,3,1];        
// haho.sort();
// console.log(haho);

// haho.reverse();
// console.log(haho);


// shorting array    (with objects)
// const haho =  [
//     {id:1, name:'Node.js'},
//     {id:2, name:'java-script'},
// ];

// haho.sort(function(a,b){
//     const nameA = a.name.toUpperCase();     // set functions
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
    
// });
// console.log(haho);


//filtering an array
// const nom = [1,-2,3];
//     const filtered = nom.filter(value => value >= 0);
// console.log(filtered);
    

// Mapping an array.   (mapping with string)
// const nom = [1,2,3];
//     const filtered = nom.filter(value => value >= 0);
//     const item = filtered.map(n => '<li>' + n + '</li>');
//     const html = '<ul>' + item.join(' ') + '</ul>';
//     console.log(html);


// (mapping with object)
    // const nom = [1,2,3];

    // const item = nom                    // chaining of object keyword
    // .filter(n => n >= 0)
    // .map(n => ({value: n})) 
    // .filter(obj => obj.value > 1)
    // .map(obj => obj.value);

    // console.log(item);



// Reducing an array

const nom = [1,-1,2,3];

// a = 0, c = 1 => a = 1,
// a = 1, c = -1 => a = 0,
// a = 0, c = 2 => a = 2,
// a = 2, c = 3 => a = 5.
const sum =nom.reduce(
    (accumulater, currentValue) => accumulater + currentValue
)

console.log(sum);

