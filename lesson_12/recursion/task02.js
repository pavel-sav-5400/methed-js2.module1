'use strict';

const numbers = arr => {
  arr.push(Math.round(Math.random() * 10));
  if (arr.reduce((a, b) => a + b) < 50) {
    return numbers(arr);
  }
  if (arr.reduce((a, b) => a + b) > 50) {
    return arr;
  }
};

console.log(numbers([]));
