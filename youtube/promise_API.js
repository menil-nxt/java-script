const p1 = new Promise((resolve , reject) => {
    // setTimeout(()  => resolve('P1 Success'), 3000);
    setTimeout(() => reject('P1 Fail'), 3000);
})
const p2 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve('P2 Success'), 1000);
    setTimeout(() => reject('P2 Fail'), 1000);
})
const p3 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve('P3 Success'), 2000);
    setTimeout(() => reject('P3 Fail'), 2000);
})


Promise.any([p1, p2 ,p3]).then((res) => {      // Try with  --> (Promise.all , Promise.settled , Promise.race , Promise.any)
    console.log(res);
})
.catch((err) => {
    console.error(err);     // you write console.error it's good way to show error in code and it's also prove that you known about this error.
    console.log(err.errors)         // this line afret all promises are settled than it's give you list of error in one array.
});




/* Promise.all() :
        1. if every promises in the array is resolved than --> wait for all to finish than after give output([val1 , val2 , val3])
        2. if any of them promises is rejected than it's throw Error --> as soon as as any of Promise is rejected than Promise.all() throw Error.
            and this Error is same Error it return by rejected promise Error.
*/

/*  Promise.allSettled() :                           it's most useable for get all promises are settled.
        1. If all Promises are resolved than --> after complation or all promises are settled than it's show there [value in one array]
        2. if any of promise is rejected than --> after complation of all promises means after settled all promises it's shown their every promises result. 
            (if values is rejected -> Error or resolved -> value) this both value and Errors in one Array.
        
        Note : it will wait for all Promises settled          (settled => means promise is resolved or reject is not matter only get(metter) result is get. )
                what ever they are resolved or reject it wait for settled all Promises. 
        
        settled => means you got the result.
        settled has two part :  1. (resolved == success == fulfiled  --> all are same word and same meaning). get => value.
                                2. (reject  == failure == rejected  --> all are same word and ame meaning).  throw => Error.
*/                  


/* Promise.race() :
        1. if every promises are resolvd than it shows --> first settled promise value where it was rejected or resolved.
        Note : it's not return value in array it's return only their first settled promise value.
        2. if any promise is rejected first than --> return result of first settled promise.

        It's kind like one race if any promise is settled first it returned result (value or Error)
        It's not wait for other Promises finish.
*/

/* Promise.any() :
        1. if all promises is resolved than --> wait for first promise success and return that promise value.
        2. if any of promise is reject than --> wait for first promise success and it's ignore all Rejected promiss Error and only show first succed promise value.
        3. if all promise is rejected than --> whaen all promise are rejected at that time it's give (AggregateError: All promises were rejected).
            in this Error it's list of all Error in one Array [error of Arr1 , Arr2 , Arr3].
*/