    'use strict'

    const reverseString = () => {
        let inpstr = prompt('');
        return inpstr.split('').reverse().join('')
    };

    console.log(reverseString());