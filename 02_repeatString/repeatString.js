const repeatString = function(string, num) {
    let hold = ''

    if (num < 0){
        return 'ERROR'
    } else {
        for (i=0; i < num; i++){
        hold = hold + string
    }
       return hold
}
}




// Do not edit below this line
module.exports = repeatString;
//holy shit im stupid