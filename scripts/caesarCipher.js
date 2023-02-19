
const caesarCipher = (string) => {
    let regTotal = /[^]{1}/g
    let regLetters = /[a-zA-Z]/g
    let str = string;

    str = str.match(regTotal);

    let test = '';
    str.forEach(x => {

        let regLetters = /[a-zA-Z]/g
        let letter = String.fromCharCode(x.charCodeAt(0) + 1)
        if(x === 'z') test = test + 'a';
        else if(x === 'Z') test = test + 'A';
        else if(regLetters.test(x)){
            test = test + letter;
        } else{
            test = test + x;
        }
    })

    return test;
}

module.exports = caesarCipher