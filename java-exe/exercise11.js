// Prime number

// Prime  (whose factors are only 1 and itself)
// composite

// 12 = 1,2,3,4,6,12 (not prime number)
// can be divided evenly by its factors

// 11 = 1,11 (prime number)
// 13 = 1,13 (prime number)

function showPrimes(limit){
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

showPrimes(23)

function isPrime(number){
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}