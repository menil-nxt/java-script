// count Occcurance

const numbers = [1,2,3,4,1,1,1];

function countOccureance(array,serchElement){
    // let count = 0;
    // for (let element of array)                       // First simple step
    //     if (element === serchElement)
    //         count ++;
    // return count;


    return array.reduce((accumulator, current) => {
        const occurrence = (current === serchElement) ? 1 : 0;          // with (reduce) method.
        console. log(accumulator, current, serchElement);           
        return accumulator + occurrence;
    },0);
}

const count = countOccureance(numbers ,1 );
console.log(count);

