/*

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.


*/



//mi solucion

/*

function destroyer(arr) {

    let all = Array.from(arguments);

    let [a,... b] = all;

    return a.filter(el => b.indexOf(el) === -1);
    
}
  
*/

//solucion freecodecamp

function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);

    console.log(valsToRemove);
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(item => item !== null);
  }


  
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));