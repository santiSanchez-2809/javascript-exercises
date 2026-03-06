const palindromes = function (str) {
    const cleanedString = str
        .toLowerCase()
        .split("")
        .filter(char => isLetterOrNumber(char))
        .join("");
    
        const reversed = cleanedString
        .split("")
        .reverse()
        .join(""); 

        return reversed === cleanedString;
};

function isLetterOrNumber(char){
    return /^[a-z0-9]$/i.test(char);
}

// Do not edit below this line
module.exports = palindromes;
