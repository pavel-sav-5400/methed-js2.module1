'use strict'

const numbers2 = (item, n, m) =>  {
    let x = [];
    for(let i = 0; i < item; i++) {
    x.push(Math.round(Math.random() * (m - n) + n));   
    }
    return x;
};
 
console.log(numbers2(12, 3, 30));