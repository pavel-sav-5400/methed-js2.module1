'use strict'

const numbers3 = (item, n, m, str) =>  {
    let x = [],
    even = [],
    odd = [];
    for(let i = 0; i < item; i++) {
    x.push(Math.round(Math.random() * (m - n) + n));
    }
    for(let i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            even.push(x[i]);
        } else {
            odd.push(x[i])
        }
    }
    if (str === 'even') {
        return even;
    }
    if (str === 'odd') {
        return odd;
    }
};
 
console.log(numbers3(12, 3, 20, 'even'));
