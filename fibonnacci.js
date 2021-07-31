
/*


Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

//solucion sloppy mia : 

/*

function sumFibs(num) {
    
    let finalArr = [1, 1];
    let pares = [];

    for (let i = 0, j = 1; finalArr[i] + finalArr[j] <= num; i++, j++) {
      
            finalArr.push(finalArr[i] + finalArr[j]);
   
        


    }
    
    return finalArr.filter(el => el % 2 !== 0).reduce((a, b) => a + b);
}
  
console.log(sumFibs(75024));

*/

//otra solucion con pista de freecodecamp
  
function sumFibs(num) {
    
    let finalArr = [1, 1];
    let variableFinal = 2;

    for (let i = 0, j = 1; finalArr[i] + finalArr[j] <= num; i++, j++) {
        let sumaDeDos = finalArr[i] + finalArr[j];
            finalArr.push(sumaDeDos);
        if (sumaDeDos % 2 !== 0)
            variableFinal += sumaDeDos;


    }
    
    return variableFinal;
}
  
  console.log(sumFibs(1000));