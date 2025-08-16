// includes

const numbers = [1,2,3,4];

// imagein this include function not in js so create one function for checking element exist in array or not.

function include (array, serchElement){
    for (let element of array)                  // Logic
        if (element === serchElement)              // Logic
            return true;
        return false;
}

console.log(include(numbers,2));            // arguments -> (numbers,2) here you pass anything value 