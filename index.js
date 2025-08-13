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

const circle = {
    radius: 1,     // object inside variable declaration (variable_name: value of that variable)
    location: {     // Object inside another object.
        x: 1,
        y: 1        
    },
    isVisible: true,

    // is a function as part an object we call that function method means (function name == method name)<--(inside object).
    draw: function(){       // object inside declare function (function_name: function_keyword(parameter){"message"})
        console.log('Hello Object inside Fuction')
    }
}

circle.draw(); // draw method of a circle object.


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

// function squre(height,width){
//         return {
//             height,
//             width
//         }
// }


// const calculate1 = squre(10,56);
// console.log(calculate1);

// const calculate2 = squre(45,67);
// console.log(calculate2);


// Constructor Functions

// function Circle(redius){
//     this.radius = radius;  // in constructor we use (this) keyword. inside this keyword we pass object propartis .
//     this.draw = function(){
//         console.log('menil');
//     }
// }

// const menu = new Circle(); // here when you call a constructor function at that time you must write (new) keyword
// console.log(menu);


// Dynamic nature of object in java-script(we can add,delete(methos or proparties))

const uno = {
    radius: 1
};

uno.color = 'yellow';
uno.draw = function(){
    console.log('menil');
}

// delete uno.color;
// delete uno.draw;

console.log(uno);