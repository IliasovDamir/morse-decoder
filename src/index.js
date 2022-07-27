const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr1 = [];
    for (let i = 0; i < expr.length; i++) {
    arr1.push(expr.slice(i, i + 10));
        i = i + 9;
    }

    let arr2 = [];
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i].includes('********')) {
           arr2.push(" ");      
    } else {   
      let str = '';
      for (let k = 0; k < arr1[i].length; k = k + 2) {         
      if (arr1[i].slice(k, (k + 2)) === '10'){
        str = str + '.';
      } else if (arr1[i].slice(k, (k + 2)) === '11') {
        str = str + '-';
      } else if (arr1[i].slice(k, (k + 2)) === '00') {
        str = str;
      }
    
    }
arr2.push(str);
    }
    }

    strRes = '';
    for (i = 0; i < arr2.length; i++) {
     if (arr2[i].includes(' ')) {
         strRes = strRes + ' ';
     } else {
         strRes = strRes + MORSE_TABLE[arr2[i]];
    }         
    }
    return strRes;
}

module.exports = {
    decode
}