// factory function or constructor function

// const address = {
//     street: 2,
//     city: 'Rajkot',
//     zipcode: 360004
// };

// factory function

function showAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    }
};

let address = showAddress(2,'Rjakot',360004);
console.log(address);


// constructor function

function ShowAddress(street,city,zipcode){
    this.street = street,   // street = (street)<- write id mendetory
    this.city = city,
    this.zipcode = zipcode 
};

let address1 = new ShowAddress(2,'Surat',450004);
console.log(address1);