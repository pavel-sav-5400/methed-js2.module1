'use strict';

const getRandomNum = function(n, m) {
    const min = Math.ceil(Math.min(n, m));
    const max = Math.floor(Math.max(n, m));
    return Math.floor((Math.random() * (max - min)) + min);
};

function game() {
    const randomNum = 33; //getRandomNum(1, 100);

    return (function checkNum(){
        const userNum = prompt('Введите число от 1 до 100');

    if (userNum === null) {
    return alert('Игра окончена');
    }

    if(isNaN(userNum)) {
    alert('Введи число!');
    return checkNum();
    }

    if (userNum > randomNum) {
    alert('Загаданное число меньше');
    return checkNum();
    }

    if (userNum < randomNum) {
    alert('Загаданное число больше');
    return checkNum();
    }
    
    if (userNum == randomNum) {
    return alert('Поздравляю, вы угадали');
    }
            
    }());
    }
    game();
