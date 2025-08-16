// array from range

function arrayFromRange (min,max) {
    const output = [];
    for (let i = min; i <= max; i++)        // Logic
        output.push(i);
    return output;
}

const numbers = arrayFromRange(-10,4);
console.log(numbers);