// get max


const numbers = [1,2,3,4];

function getMax(array){
    if (array.length === 0) return undefined;

    // let max = array[0];

    // for (let i = 1; i < array.length; i++).   // simple way
    //     if (array[i] > max)
    //         max = array[i];
    
    // return max;

    return array.reduce((a, b) => (a > b) ? a : b);     // with reduce method and it's very simple
}

const max = getMax([1,2,3,4,5]);
console.log(max);