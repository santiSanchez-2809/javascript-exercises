const palindromes = function (str) {
    const arr = str
        .toLowerCase()
        .split("")
        .filter(char => isLetterOrNumber(char));
    const reversed = [...arr].reverse(); 

    for(let i = 0; i < arr.length; i++){ 
        if(reversed[i] !== arr[i]) return false;   
    }

    return true; 
};

function isLetterOrNumber(char){
    return /^[a-z0-9]$/i.test(char);
}

// Do not edit below this line
module.exports = palindromes;
