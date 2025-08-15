// address object

const address = {
    street: 2,
    city: 'Rajkot',
    zipcode: 360004
};

function showAddress(address){
    for(let key in address)
        console.log(key,address[key]);
}

showAddress(address);