const removeFromArray = function(arr, ...num) {
    const newArray = [];
    arr.forEach((item) => {
        if (!num.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
