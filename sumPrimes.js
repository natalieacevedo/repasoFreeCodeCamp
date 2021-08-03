
/*

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/

/*

function sumPrimes(num) {

    let final = 2;

    for (let i = 3; i <= num; i++){
        let verdades = true;
        for (let j = 2; j < i; j++){
           

            if (i % j === 0) {
                verdades = false;
            } 

        }
        if (verdades) {
            final += i;
        }
    }

    return final;

}


*/

//solucion fea freecode camp solo para ver como va en el debugger

function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }







console.log(sumPrimes(977));
































/*
function sumPrimes(num) {
    let isPrime;
     let primes = [];
 
     for (let i = 2; i <= num; i++){
         isPrime = true;
         for (let j = 2; j < i; j++){
             if (i % j === 0) {
                 isPrime = false;
                 break;
             }
         }
         if (isPrime) {
             primes.push(i);
         }
     }
      return primes.reduce((acc, el) => acc + el)
 }
 
 sumPrimes(10);
 */