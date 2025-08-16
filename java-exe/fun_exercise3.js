// Error handling
try {
    const numbers = [1,2,3,4];
    const count = countOccureance(null ,1 );
    console.log(count);
}
catch (e){
    console.log(e.message)
}

function countOccureance(array,serchElement){
    if (!Array.isArray(array))
        throw new Error('Invalid syntax.');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === serchElement) ? 1 : 0;                   
        return accumulator + occurrence;
    },0);
}


