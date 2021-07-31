
/*

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/

//PRIMERA SOLUCION: 

/*

function uniteUnique(...arr) {

    let finalArr = [];

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (finalArr.indexOf(arr[i][j]) === -1){
                finalArr.push(arr[i][j])
            
            } 
        }

    }


    return finalArr;

    
  };

  */
  //mi otra solucion

  /*

  function uniteUnique(...arr) {

      return arr.reduce((acc, current, indi) => {
         // console.log(acc);
          //console.log(current);

          for (let i = 0; i < current.length; i++){

              if (acc.indexOf(current[i]) === -1) {
                  acc.push(current[i])
                  
              }
          }
        
          return acc;
          
      }, []);

      
    
  };

  */

  //solucion mas pepina de mi fide con objeto, mas eficiente:

  /*

  function uniteUnique(...arr) {
      let seen = {}
      
    

    return arr.reduce((acc, current) => {
       
        for (let el of current){
            if (!seen[el]) {
                seen[el] = true;
                acc.push(el)
            }
        }

        console.log(seen);
      
        return acc;
        
    }, []);
};
  
  */
 console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
