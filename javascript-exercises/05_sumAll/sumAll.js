const sumAll = function(num1, num2) {
    let sum = 0
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    } else {
        if (num1 < 0 || num2 < 0){
            sum = 'ERROR'
        } else if (num1 < num2) {
            for ( i = num1; i <= num2; i++ ) {
                sum += i
            }
        } else if (num1 > num2) {
            for ( i = num2; i <= num1; i++ ) {
                sum += i
            }
        } else {
            sum = num1
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
