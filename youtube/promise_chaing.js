const cart = ["pen", "book", "leptop"];

/// Counsumer part
createOrder(cart)   // returns us to orderId       // when you call this createOrder
.then(function(orderId){     // this is a success part if it is success it show this orderId.
    console.log(orderId);
    return orderId;             // it's show orderId -> '12345'.
})
.then(function(orderId){                // chaing of promises createOrder -> proceedeToPayment
    return proceedeToPayment(orderId);
})
.then(function(paymentStatus){            // this function is print proceedeToPayment -> (message)
    console.log(paymentStatus);         // this paymentStatus is new promese name those you define in proceedeToPayment function.
})
.then(function(orderId){
    return showOrderSummary(orderId);
})
.then(function(showinfo){
    console.log(showinfo);
})
.then(function(orderId){
    return updateWallet(orderId);
})
.then(function(wallet){
    console.log(wallet);
})
.catch(function(err){       // when you want show error in this promise at that time write => .catch(function(parameter) {"message" or "call this parameter"})
    console.log(err.message);       // if you want to reject any part than it's (catch) is use for that. 
})
.then(function(){
    console.log("no matters what happens , I will definatlly called !")
});

console.log(createOrder());


/// Producer part

function createOrder(cart){
    const pr = new Promise(function(resolve , reject){      // this is the syntax for create create by own promise
        // createOrder
        // validetCart
        // orderId
        if(!validetOrder(cart)){            //  but this validetorder is true than this things work --> if cart is rejected than  this gives Error throw => reject(err - message)
            const err = new Error("this is not valid cart");
            reject(err);
        }

        // logic of create order      is successfull it's give --> orderId.
        const orderId = "12345";        // if cart is valid than it's give orderId throw => resolve(orderId)
        if(orderId){
            setTimeout(function() {
                resolve(orderId);
            }, 2000);
            
        }
    })
    return pr;
}

function proceedeToPayment(){
    return new Promise(function (resolve, reject){
        resolve("Payment Successfull!");
    });
}

function showOrderSummary(){
    return new Promise(function(resolve , reject){
        resolve("Deliverd on next monday");
    })
    
}

function updateWallet(){
    return new Promise(function(resolve, reject){
        resolve("Wallet is updated");
    })
}

function validetOrder(){
    return true;            // check case with -> false
}