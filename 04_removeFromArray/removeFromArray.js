const removeFromArray = function(theArray, ...theArgs) {

    for (const arg of theArgs){
        if (typeof theArray[theArray.indexOf(arg)] === 'undefined'){
            continue
        } else {
            theArray.splice(theArray.indexOf(arg), 1)
        }
    }
    return theArray
}

// Do not edit below this line
module.exports = removeFromArray
