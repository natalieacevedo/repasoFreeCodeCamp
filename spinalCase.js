
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {


  //mi segunda solucion con regular expressions

  let regular = /\W|\_|(?<=[a-z])[A-Z]/g;

 // let nuevaza = str.replace(regular, '-');
 // console.log(nuevaza);
  
  return str.replace(regular, (captura) => {

    console.log(captura);
   
    if (/[A-Z]/.test(captura)) {
      return '-' + captura;
    }

    else {
      return '-';
    }

  }).toLowerCase();
  
  
  
  
  
  /*
  




  
  
  let vacio = [];
 
  for (let i = 0; i <= nuevaza.length-1; i++){

    if (nuevaza.charCodeAt(i) >= 65 && nuevaza.charCodeAt(i) <= 90 && nuevaza[i - 1] !== '-'&& i !==0) {

      // ale =  nuevaza.replace(nuevaza[i], '-' + nuevaza[i]);
      vacio.push(`-${nuevaza[i]}`)
    
    } else {
      vacio.push(nuevaza[i])
    }
  }
  return vacio.join('').toLowerCase();
  
  */
    
  }
  
console.log(spinalCase("AllThe-small Things"));
  
/*

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string all-the-small-things.


*/