"use strict";      // for use strict mode 
// if you want to use non-strice mode than do not write "use strict" or even don't write any thing for non strict mod.


// this in global space

     // if this keyword is not inside any function than this keyword is in global space.
console.log(this); 
    // if this keyword is in globle space than --> this keyword has global object (it's print Window object  and this window object is global object of js.)





// this inside a function

    function x(){
        // the value depends on strict / non-strict mode. 
        console.log(this);    // non-strict mode --> value window  or   strict mode --> undefined 
    }
    x();




// this inside non-strict mode - (this substitution)

    // if the value of this keyword is undefinde or null
    // this keyword will be replaced with globalObject.
    // only in non-strict mode. 




// this keyword value depends on how the function is called (window)

    console.log("call without any refrence",x());
    console.log("call function with refrence (this)",this.x());
    console.log("call function with refrence (window)",window.x());



// this inside a object's method        --> when you write function in object that function is called method. 

// const student1 = {
//     name: "Menil",
//     method: function (){
//         console.log(this);       // value of this keyword is object
//     }
// }

// student1.method();



// call apply bind methods (sharing methods)

    // Call Method
        const student1 = {
            name: "Menil",
        }

        const method = function (city,state){
            console.log(this);              // this is a refrence to student1.
        }

        method.call(student1,"Rajkot","Gujarat");

        const student2 = {
            name: "Jotaniya",
        }
        method.call(student2,"Banglore","Tmilnadu");
        method.call(student1.name + " " +student2.name);

    // Apply Method

        method.apply(student2,["Banglore","Tmilnadu"])      // here you put (second argument in array in list)

    // Bind Method
        
        let bind = method.bind(student1,"Banglore","Tmilnadu");
        console.log(bind);
        bind();


// this inside arrow function

        const obj = {
            a : 10,
            x : () => {
                console.log(this);  // this keyword is print it's lexical context of object. because (this refrence => obj) and obj object's lexical context is globalObject.
            }
        }

        obj.x();

// this inside nested arrow function

        const obj2 = {
            a : 10966,
            // it,s give you enclosing lexical context.
            x : function () {
                const y = () => {
                    console.log(this);
                }
                y();
            }
        }

        obj2.x();

// this inside DOM elements => refrence to HTMLelement