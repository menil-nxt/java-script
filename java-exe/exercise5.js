// Odd or even Number.

function showNumber (limit){

    for ( let i = 0; i <= limit; i++){
        if ( i % 2 === 0) console.log(i, 'even');
        else
            console.log(i , 'Odd');
    }

    // const hello = ( i % 2 === 0) ? 'even' : 'Odd'; // easy way implimentation.
    // console.log(hello);
}

showNumber(10);



