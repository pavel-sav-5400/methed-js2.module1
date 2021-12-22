        'use strict'

        const rain = Math.random() * 1;
        
        if (Math.round(rain) == 1) {
            console.log('Пошёл дождь. Возьмите зонт!');
        } 
        if (Math.round(rain) == 0) {
            console.log('Дождя нет!');
        };


        const rusBalls = +prompt('Введите кол-во баллов по русскому языку');
        const matBalls = +prompt('Введите кол-во баллов по математики');
        const infBalls = +prompt('Введите кол-во баллов по информатики');
        
        if (rusBalls + matBalls + infBalls > 265) {
            console.log('Поздравляю, вы поступили на бюджет!');
        } else {
            console.log('К сожалению вы не поступили:(');
        }
       