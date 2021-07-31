/*

Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {
    
    let vocales = /^[aeiou]+/ig;

    if (vocales.test(str)) {
       
        return str + 'way'
    
    } else {
        
        let consonantes = str.match(/^[^(aeiou)]+/gi).join('');
        str.slice(consonantes.length) + consonantes + 'ay';
    }

  //  console.log(mayusculas);

    /*
    
    let strArr = str.split('');
  //  console.log(strArr);

    
    if (vocales.test(str)) {
        return str + 'way'
   
    } else {
        let matchi = str.match(mayusculas).join('').split('');
        
        return strArr.splice(matchi.length).join('') + str.match(mayusculas).join('') + 'ay';
            //.push(str.match(mayusculas).join(''));

    }

    */
 

  }
  
  console.log(translatePigLatin("algorithm"));