'use strict'

const nums = [
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

const numbers = nums.map((item, n, m) =>  {
    const getRundomNum = (n, m) => {
    return Math.round(Math.random() * (m - n) + n);
    };
    return getRundomNum(-61, 76);
    })

console.log(numbers);
console.log(1);