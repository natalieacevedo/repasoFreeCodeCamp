/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/



//Mi primera solucion, funciona pero ugly.

/*

function diffArray(arr1, arr2) {
    
    let final = [];

    let longest = arr1.length >= arr2.length ? arr1 : arr2;
  
    let shortest = longest !== arr1 ? arr1 : arr2;

   let a = longest.filter(el => shortest.indexOf(el) === -1);
 let b = shortest.filter(el => longest.indexOf(el) === -1);
    
   
    return a.concat(b);
    
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

  */

  //otra solucion con pista de freecodecamp:

  function diffArray(arr1, arr2) {
    
      let togheter = arr1.concat(arr2);

     return togheter.filter(el => {

          if (!arr1.includes(el) || !arr2.includes(el)) {
              return el;
          }
            
      });
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
