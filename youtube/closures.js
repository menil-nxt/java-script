function x(){
    var a = 7;
    return function y(){        // here you can also give return above and this both are same.
        console.log(a);
    }
    // return y;        same as below 
}
var z = x();
console.log(z);

z();
