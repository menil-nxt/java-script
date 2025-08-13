// FizzBuzz Algoritham (interview question)
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 = input
// Not a number => 'Not a number'

function fizzBuzz(input){
    if (typeof input !== 'number')
        return NaN; // NaN means (Not a Number)
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'fizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 ===0 )
        return 'Buzz';
    return input;

}

const output = fizzBuzz(3);
console.log(output);