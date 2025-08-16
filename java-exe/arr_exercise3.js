// Except

const numbers = [1,2,3,4];

function except(array, exclude){
    const output = [];
    for (let element of array)
        if (!exclude.includes(element))     // Logic 
            output.push(element);           // push to output
        return output;
};

const output = except(numbers,[3]);     // pass to arguments
console.log(output);

