            'use strict'


const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    
    let n = 0;
    for(let i = 0; i < arr.length; i++)
    n += arr[i] / arr.length
    return Math.floor(n)
};
console.log('Средний чек за день: ', getAverageValue(allСashbox));