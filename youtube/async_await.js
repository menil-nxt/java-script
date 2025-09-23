/*
* What is async ?
* What is await ?
* How async await works behind the scenes?
* Examples of using async/await
* Error Handling
* Interviews
* Async await vs Promise.then/.catch
*/



// async function always returns a promise.  // syntex of async function --> async function function_name(){  }.
let  p1 = new Promise(function (resolve , reject){
    setTimeout(() => {
        resolve("promise resolve value ...");
    }, 5000);
});

let  p2 = new Promise(function (resolve , reject){
    setTimeout(() => {
        resolve("promese resolved values ...")
    }, 7000);
});

// async function getData(){
//     return p;
// }

// const dataPromise = getData();
// // console.log(dataPromise);
// dataPromise.then((res) => console.log(res))


// using await with async :

// with await and async 


//anait can only be used inside an async function
async function hendelData(){
    console.log("hello async await function")   // this line was printed first and than js engin is go to next line.
    
    try{                                // for Error handling in async await you use (try or catch) block
        const val = await p1;        // js engin is waiting for promise to resolved 
        // in try block you just put all the your await code or all  promises.
        console.log(val);
        console.log('p1 was rejected');
    }
    catch(err){
        console.log(err);
    }

    try{
        const val2 = await p2;      // 
        console.log(val2);
        console.log('p2 was resolved');
    }
    catch(err){
        console.log(err);
    }
}
hendelData();

// console.log('hello js');        // but this line was printed because this console is not part of async await function.





// with promise 
// function dataPromise(){
//     p.then(res => console.log(res));  // js engin is not wait for promise resolved its print firat this console message
//     console.log("menil");
// }

// dataPromise();

// Examples of using async/await :
const API_URL = "https://aghegbbbsuertykj";
async function datarate(){

try{
    const data = await fetch(API_URL);            // fetch() => data
    const jsonValue = await data.json();           // data.json() => jsonValue()
    console.log(jsonValue);                        // print => (jsonValue)
}
catch(err){
    console.log(err );       // console.log(alert("this is not valid"))
}

 // fatch() => Response.json() => result(jsonValue);
     
}

datarate();
