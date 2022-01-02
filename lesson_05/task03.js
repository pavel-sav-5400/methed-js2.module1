    'use strict'

    const reverseString = () => {
        let inpstr = prompt('Введите текст');
        return inpstr.split('').reverse().join('')
    };

   console.log(reverseString());