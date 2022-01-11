'use strict'
const names= [
    'Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'
    ];

const addPrefix = (a, b) => {
    let x = [];
    x = a.map(elem => b + elem);
    return x;
};
    console.log('addPrefix: ', addPrefix(names, 'Mr '));