const cart = ['pen', 'book', 'mobile', 'macbook'];

createOrder(cart , function(orderId){
    proceedToPayment(orderId);
}) 

// const promise = createOrder(cart);

// promise.than(function(orderId){
//     proceedToPayment(orderId);
// });

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo){
    return updateWalletBalance(paymentInfo);
});


// createOrder (cart)                           // you can write like this way with arrow function.
// .then((orderId) => proceedToPayment (orderId))
// .then((paymentInfo) => showOrderSummary (paymentInfo))
// .then ((paymentinfo) => updateralletBalance (paymentinfo));




// const GITHUB_API = "https://api.github.com/users/menil-nxt"

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function (data){
//     console.log(data);
// });




/* 1. What are Promises?
Promises are objects which are used to perform asynchronous operations. 
    1 -> They are just like placeholders to store a future value that will be returned after some time.
    2 -> Promise is an object representing the evantual complition or failure of an asynchonous operations. 
    3 -> Promise object is a container for a fature values.
They contain two properties: PromiseState and PromiseResult.*/

/* 2. Importance of Promises:
a) Promises can help us to write trust worthy code.
b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain. */

