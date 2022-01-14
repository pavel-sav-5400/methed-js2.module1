    'use strict'

 const nums = [
    13, 7, 55, 9, 67, 89, 5, 2, 49, 68, 23, 4, 
    98, 97, 91, 6, 1, 54, 76, 31, 8, 64, 25
];

let numbers = nums.map(item => {
        const getRundomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
        return getRundomNum(1, 101);
       
})
 
console.log(numbers);