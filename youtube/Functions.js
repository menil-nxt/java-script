let x = 1;     // global variable
a();        // calling function 1
b();        // calling function 2
console.log(x);


function a(){           // function 1
    let x = 10;
    console.log(x);
}

function b(){           // function 2
    let b = 100;
    console.log(b);
}