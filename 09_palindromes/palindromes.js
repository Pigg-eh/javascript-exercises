const palindromes = function (string) {
    let stringGF = string.replace(/\s/g, '')
    let rawString = stringGF.toLowerCase() .replace(/[^\w\s\']|_/g, '')
    let reverseString = rawString.split('').reverse().join('')

    console.log(`raw ${rawString}`)
    console.log(`reverse ${reverseString}`)

    if (rawString === reverseString)  return true;
    else return false
};

/*
learnings:
    -return defaults to true or false
    -
*/

// Do not edit below this line
module.exports = palindromes;
