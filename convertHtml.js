/*

Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

    let final = '';
    let entities = {
        '&': '&amp;',
        '<': '&lt;', 
        '>':  '&gt;' ,
        '"': '&quot;',
        "'": '&apos;'
    };

    for (let i = 0; i < str.length; i++){

        if (entities.hasOwnProperty(str[i])) {
            final += entities[str[i]];
        } else {
            final += str[i]
        }
    }

    return final;
  }
  
  console.log(convertHTML('Hamburgers < Pizza < Tacos'));