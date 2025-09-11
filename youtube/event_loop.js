// event loop is very useful for js engin 
// event loop is useful when like setTimeOut like functions are running and more diffreent function are running
// event loop work is diffrent it's check if call stack is empty for running another process(callback queue).
// when it's find it's take that callback queue processes pushed inside the call stack. but in FIFO menar.


// Trust issues with setTimeOut()

console.log('start');

setTimeout(function xyz(){
    console.log('callback function')
}, 5000);

console.log('end');

// miliouns lines of code you can write down

let startDate = new Date().getTime();
let endTime = startDate;
while(endTime < startDate + 10000)
    endTime = new Date().getTime();

console.log('while loop expire');