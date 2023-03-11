const reverseString = function(splitString) {
//string into array
//reverse array
//array into string
//return
  let arraySplit = splitString.split('')

  let newArray= []
  for (i=splitString.length; i>=0; i--){ 
    newArray.push(arraySplit[i])
    if (i === 0) {
    finalString= newArray.join('')
    //finalString=finalString.replaceAll(',','') //this was stupid lol using with toString
    return finalString
    }
    
    //utilize i, find out if you can assign a array to the end of one
  }
  
};

// Do not edit below this line
module.exports = reverseString;