//Function statement also Known as Function Decleration
//a();  you can call here also
function a(){
    console.log('a is called');
}
a();


//Function Expresion
//b(); you can not call this function before initialtion
let b = function(){
    console.log('b is called');
}
b();      


//Anonymous Function
// function () {            this function dose not have ownd indentity.
                            // you can use this function as a value of any variable just like function expresstion
// }


//Named function expression
let c = function xyz(){               // name function means function has name.  
    console.log('c is called')      //console.log(xyz) its give you whole code inside it's 
}
c();                // but you are call this with only c();
//xyz();    you can not call it by this function name because it's xyz is assign like variable value.


//Diffrence between Argument & Perameter
let d = function(x,y){      // this both are parameters
    console.log('both are here',x,y);
}

d(1,3);     // this both are arguments


//First class Function - Ability to be used like values
//FIrst class citizen(first class function) both are same
let e = function(para1){
    return function() {

    }
}
    // function xyz(){      you can pass in first calss function(first calss citizen)
        
    // }
console.log(e());

// e(function(){            // you can pass arguments as a function also this is first class function 

// });

// Arrow Function