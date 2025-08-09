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
