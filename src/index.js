const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr = expr.split('**********');
    let message = expr.map(el => {
        let word = [];
        for (let i = 0; i < el.length - 1; i = i + 10) {
            let str = el.substr(i, 10);
            str = str.substr(str.indexOf('1'));
            let char = [];
            for (let j = 0; j < str.length - 1; j = j + 2) {
                let symb;
                if (str.substr(j, 2) === '10') symb = '.';
                if (str.substr(j, 2) === '11') symb = '-';
                char.push(symb);
            }
            word.push(MORSE_TABLE[char.join('')]);
        }
        return word.join('');
    })
    return message.join(' ');
}

module.exports = {
    decode
}