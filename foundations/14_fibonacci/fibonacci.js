const fibonacci = function(num) {
    let result = 1; 
    let previousResult = 0;
    let aux;

    num = +num;

    if(num === 0) return 0;
    if(num < 0) return "OOPS"

    for(let i = 1; i < num; i++){ 
        aux = result;  
        result += previousResult; 
        previousResult = aux;
    }
    return result; 
};

// Do not edit below this line
module.exports = fibonacci;
