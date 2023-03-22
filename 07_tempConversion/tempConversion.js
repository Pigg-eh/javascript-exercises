const convertToCelsius = function(tempF) {
  
  let convert = (tempF -32) * (5/9)
  let final = convert.toFixed(1)
  return +final
};

const convertToFahrenheit = function(tempC) {
  let convert = (tempC * (9/5)) + 32
  let final = convert.toFixed(1)
  return +final
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}; 
