
console.log('function declaration and expression');
// function declaration
function walk() {
    console.log('function declaration');
}

//  Anonymous function expression
const run = function() {      // after function keyword if name is given than it's name function expression
    console.log('Anonynous function expression');
};
let move = run;
run();
move();


// Name function expression
let go = function walk() {      // example of name function expression 
    console.log('with Name after function keyword');
};
go();


//Hoisting 
// Hosting is the process of moving function declaration to the top of the file. and it is done automatically
// by the java-script engine that is executing this code.

// function declaration 
// walk();     // we can call function before it's declare it.

// function walk(){
//     console.log('hello');
// }

// Function expression
//  run();
               // here we can not call function without declare it . because it's function expression.
// function run(){
//     console.log('run');
// }

// Argument
console.log('Argument');

function sum(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9));       // you can pass argument as you want.


// Rest operator
console.log('rest operator');

function sum(...args){              // you can not give any parameter after rest perameter(...arg).
    return args.reduce((a,b) => a + b); 
}
console.log(sum(1,2,3,4,5,6,7,8,9)); 


// Default parameter
console.log('Default parameter');

function interest (principal, rate = 3.4, years = 5){     // give defualt value to parameter that is called default parameter.
    return principal * rate / 100 * years;
}

console.log(interest(100000));   // (first principal amount , interest rate par that amout , years)


// Getters and Setters

// const person = {
//     firstName: 'Menil',
//     secondName: 'Jotaniya',
//     get fullName() {            // getters =>  get keyword.
//         return `${person.firstName} ${person.secondName}`;
//     },
//     set fullName (value) {         // setters =>  set keyword.
//         const parts = value.split(' ');
//             this.firstName = parts [0];
//             this.secondName = parts [1];
//     }
// };

// person.fullName = 'krishna vashudev';
// //getters => access Proparties
// //setters => change (mutate) them
// console.log(person);


// Try and Catch

// const person = {
//     firstName: 'Menil',
//     secondName: 'Jotaniya',
//     set fullName (value) {       
//         if(typeof value !== 'string') 
//             throw new Error('value is not a string.');
        
//         const parts = value.split(' ');
//         if(parts.length !== 2)
//             throw new Error('Enter a first and last name');
//             this.firstName = parts [0];
//             this.secondName = parts [1];
//     }
// };
// try {
//     person.fullName = '';   
// }
// catch (e){
//     alert(e);
// }

// console.log(person);


// global and local scope
{
    const message = 'hi';
}
console.log(message);