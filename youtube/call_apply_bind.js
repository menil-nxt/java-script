// Call
let name = {
    firstName: "Menil",
    lastName: "Jotaniya",
}


let printFullName = function (homeTown , state){
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + " in " + state);
}


printFullName.call(name, "rajkot", "Gujrat");
let name2 = {
    firstName: "Ganesh",
    lastName: "Jotaniya",
}

// function Borrowin 

printFullName.call(name2, "Pune", "Maharastra");


// Apply Method

printFullName.apply(name2, ["Pune", "Maharastra"]);



// Bind Method
let printMyName = printFullName.bind(name2, "Pune", "Maharastra");
console.log(printMyName);
printMyName();
