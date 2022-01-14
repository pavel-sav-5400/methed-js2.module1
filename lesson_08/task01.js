'use strict'

const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];



const numbers = nums.map(item =>  {
    const getRundomNum = () => {
    return Math.round(Math.random() * 100 + 1);
    };
    return getRundomNum();
    })
 
 console.log(numbers);