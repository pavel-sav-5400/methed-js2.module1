    'use strict'

 const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];



const numbers = nums.map(item =>  {
    const getRundomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
        return getRundomNum(1, 101);
    })
 
console.log(numbers);