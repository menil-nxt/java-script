// what is closer -> closer means function and with its lexical anviroment bundale togheter it's form is calls closer. 
// explination with good example
function banana(b){  // main banana function with its's global lexical anviroment.
   let a = 10;  // a is inside to banana here a is accessecible for mango because it's mango s lexical anviroment variable. 
    
    return function mango(){  // mango function nested function of banana it's access all variables and functions inside banana's function because it's lexible anviroment for this mango(means it can access all the things to perent function.)      
        console.log(a,b);         // here you can easly access this a variable because it's avalable in mango's laxical anviroment.
    }
    // let a = 10;      it still accessible because it's avalable in lexical anviroment.
    // return mango;       // both return are same
}

// banana()();      // both are same work.
var fruit = banana('hi may name is menil');   // here you are give banana value to fruit.
fruit() ;


// data hiding 


function Counter(){
    let x = 10;
    this.incrementCounter = function(){
        x++;
        console.log(x);
    }
    this.decrimentCounter = function(){
        x--;
        console.log(x);
    }
}
// let counter1 = counter();
// counter1();
// counter1();
// counter1();

// console.log('its counter 2');
// let counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();

let counter1  = new Counter()
console.log('decriment');
counter1.decrimentCounter();

console.log('incriment');
counter1.incrementCounter();
