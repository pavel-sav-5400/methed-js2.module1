'use strict'

const numbers = (item) =>  {
    let x = [];
    for(let i = 0; i < item; i++) {
    x.push(Math.round(Math.random() * 100));   
    }
    return x;
};
 
console.log(numbers(12));
