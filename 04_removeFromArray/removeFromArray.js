const removeFromArray = function(theArray, ...theArgs) {

    for (const arg of theArgs){
        theArray.splice(theArray.indexOf(arg), 1)
        
        if (typeof theArray[indexOf(arg)] === 'undefined'){
            return theArray  
        }
    }
    return theArray
}

// Do not edit below this line
module.exports = removeFromArray
