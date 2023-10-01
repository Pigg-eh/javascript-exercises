const fibonacci = function(n) {
    
    n = +n

    if (n < 0){
        return 'OOPS'  
    }else if (n === 1|| n === 2) {return 1}
    
    else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
};

/* 
learnings:
    comparisons need to be written out like above
    recursive is cool
    I could have just reassigned the parameter with a unary operator instead of just doing nothing with it 
*/

// Do not edit below this line
module.exports = fibonacci;
