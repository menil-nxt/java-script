// hoisting 


getName();
// console.log(getName);
// console.log(x);

let x = 10;

// first way to declare function 

function getName(){
    console.log('First-Way(normal)');
}
// Second way to declare function with arrow function

let getName2 = () => {              // In Arrow function you Cannot access 'getName2' before initialization
    console.log('Arrow Function')       // getName2 function is behave like another variable
}


// 3 way to declare a Function

let getName3 = function() {             // With this function declaration Cannot access 'getName3' before initialization
    console.log('Like a variable declarations');
}