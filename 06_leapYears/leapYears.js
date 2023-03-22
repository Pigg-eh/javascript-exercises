const leapYears = function(year) {

    //leap century 
    if (year % 400 === 0){
        return true
     }else if (year % 100 === 0){
        return false
     }else if (year % 4 === 0){
        return true
    } else  {
        return false
     }
    //leap year
    //all else

};

// Do not edit below this line
module.exports = leapYears;
