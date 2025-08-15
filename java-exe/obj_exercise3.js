// object equality

function ShowAddress(street,city,zipcode){
    this.street = street,   // street = (street)<- write id mendetory
    this.city = city,
    this.zipcode = zipcode 
};

let address1 = new ShowAddress (2,'Surat',450004);
console.log(address1);

let address2 = new ShowAddress (2,'Surat',450004);
console.log(address2);

function areEqual(address1, address2){                  //ctry both object are equal or not
    return address1.street === address2.street && 
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode;
};

console.log(areEqual(address1,address2));

function areSame(address1,address2){
    return address1 === address2;
};

console.log(areSame(address1,address2));