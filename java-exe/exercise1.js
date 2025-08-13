// Write a function that takes two numbers and returns the maximum of the two.

function max (num1,num2){
    if (num1 > num2){
        console.log('Maximum no',num1);
    }
    else if (num1 < num2){
        console.log('maximaun no',num2);
    }
    else{
        console.log('Both no are equal');
    }
}

max (40,20);

// short way 

function num (no1,no2){
    return (no1 > no2) ? no1 : no2; // we have to use conditional statment. (ternary statment).
}

let number = num(45,36);
console.log(number);
