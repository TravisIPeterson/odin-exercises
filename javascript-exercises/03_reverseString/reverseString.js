const reverseString = function(string) {
    let stringArr = string.split("");
    let stringRev = stringArr.reverse();
    let stringFinal = stringRev.join("");
    return stringFinal
};

// Do not edit below this line
module.exports = reverseString;
