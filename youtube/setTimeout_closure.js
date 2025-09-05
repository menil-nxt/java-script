// semple of settime

// function x(){
//     var i = 7;
//     setTimeout(function () {            // it's dose not wait for this 3 second  
//         console.log(i);
//     },3000);            // 3000 milisecond = 3 second
//     console.log('hello javascript')         // it's not 3 second but it's run this line after this line print setTimeout function.
// }
// x();



// excersice -> make program for every seconfd is show 1,2,3,4... like (second -> 1) , (second -> 2), (second -> 3). like this 
// function x(){
//     for(let i = 1; i <= 5; i++){            // whay is not working with var and whay it is working with let because let variable is strose value in one (block).
//         setTimeout(function () {           
//             console.log(i);
//         }, i * 1000);            
//     }
//     console.log('hello javascript') 
// }
// x();



// with var keyword
function x(){
    for (var i = 1; i <= 5; i++){
        function close(x){              // with this function we create every time new copy of i . like copy -> 1 , copy -> 2 ......
            setTimeout(function (){         // and than this function is works for every second.
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log('menil');
}
x();