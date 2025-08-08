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