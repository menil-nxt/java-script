// sum of multiples of 3 and 5.

// multiples of 3: 3,6,9
// multiple of 5: 5,10

function sum(limit){
    let sum = 0;

    for (let i = 0; i<= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum = i + 1;

    return sum;
}

console.log(sum(50));

//  what is doing in output : when you enter multiples of 3 and 5 at that 
//  time that number is increase by 1. like : 6->7 , 10->11.