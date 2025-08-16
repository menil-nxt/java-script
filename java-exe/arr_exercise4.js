// Moving an element

const numbers = [1,2,3,4];


function move(array, index,offset){
    const position = index + offset;
    if(position >= array.lenght || position < 0){           // logic
        console.error('Invalid offset you choose');
        return; 
    }


    const output = [...array];
    const element = output.splice(index,1)[0]; // logic
    output.splice(position, 0,element);         // logic
    return output;
}

const output = move(numbers, 1, -2);        //pass argument
console.log(output);