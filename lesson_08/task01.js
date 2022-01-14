'use strict'

const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

const numbers = nums.map(item =>  {
    let x = Math.round(Math.random() * 100 + 1);
    return x;
   })
 
 console.log(numbers);
