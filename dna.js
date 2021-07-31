
/*

DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/

function pairElement(str) {

    let todos = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    return str.split().map(el => [el, todos[el]]);

//     let todos = [['A', 'T'], ['C', 'G']];

//    return str.split('').map(el => {
      
//        let rightArr = todos[0].indexOf(el) !== -1 ? 0 : 1;
//        let rightPosition = todos[rightArr].indexOf(el);

//        if (rightPosition === 0) {
//            return [el, todos[rightArr][rightPosition + 1]];
     
//        } else {
//            return [el, todos[rightArr][rightPosition - 1]]
//        }
    

//   })
    
    

};
  
  console.log(pairElement("TTGAG"));