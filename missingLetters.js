/*

Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined

*/

function fearNotLetter(str) {
    /*

    solucion mas pepina de Fidel : 

    function fearNotLetter(str) {
        let beginning = str[0].charCodeAt(),
            end = str[str.length - 1].charCodeAt();
        for(let i = 0, c = beginning; c <= end; c++, i++) {
            if(str[i].charCodeAt() !== c) {
                return String.fromCharCode(c);
            }
        }
        return;
    
        */
    let beginning = str[0].charCodeAt();

    let end = str[str.length - 1].charCodeAt();

    let allLettersIncludingTheMissingOne = [];

    for (let i = beginning; i <= end; i++){

        allLettersIncludingTheMissingOne.push(i);
    }

    if (allLettersIncludingTheMissingOne.length === str.length) {
        return undefined
    }
    else {
  
        return String.fromCharCode(allLettersIncludingTheMissingOne.filter(el => str.indexOf(String.fromCharCode(el)) === -1)[0]);
    };

  }
  
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));