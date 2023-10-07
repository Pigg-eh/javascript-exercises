const findTheOldest = function(array) {
    return array.reduce ((oldest, current)=>{
        const oldestAge = getOldness (oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getOldness(current.yearOfBirth, current.yearOfDeath)
    
    return oldestAge < currentAge ? current : oldest;
    })
}


function getOldness(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
      }
    return death - birth
}
    //me confuse


// Do not edit below this line
module.exports = findTheOldest;
