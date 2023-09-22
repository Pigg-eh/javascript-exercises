const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let ans = 0
  array.forEach((item)=>{
    ans += item;
  });
  return ans;
};


const multiply = function(array) {
  let a = 1;
    for (i= 0; i<array.length; i++){
      a *= array[i];
    }
return a;
};

const power = function(a, b) {
  return Math.pow(a,b)
};

function factorial(a) {

  let result = 0

  if(a === 0)result = 1;
  
  else result = a * factorial(a-1);

  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
