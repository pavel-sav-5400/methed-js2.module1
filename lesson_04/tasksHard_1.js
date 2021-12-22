        'use strict'

        const income = +prompt('Введите ваш доход');

        if (income < 15000) {
            console.log(`Налог составляет: ${income * 0.13}`);
        }
        if (income >= 15000 && income <= 50000) {
            console.log(`Налог сотавляет: ${income * 0.20}`);
        }
        if (income > 50000) {
            console.log(`Налог составляет: ${income * 0.30}`);
        }