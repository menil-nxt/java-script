// Stars

function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++) // nested loop (lopp inside another loop)
            pattern += '*';
        console.log(pattern);
    }
}

showStars(6);