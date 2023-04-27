const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1)
};

const power = function(num, exp) {
  return Math.pow(num, exp)
}

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
