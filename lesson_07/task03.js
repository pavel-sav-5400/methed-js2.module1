        'use strict'

        const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
        
        const addPrefix = (a, b) => {
            let x = [];
            for(let i = 0; i < a.length; i++)
            x = a.map(elem => b + elem);
            return x;
        };
            console.log('addPrefix: ', addPrefix(names, 'Mr '));

        

