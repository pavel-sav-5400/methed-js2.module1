        'use strict'
          

        const convert = () => {
           let doll = 1.2;
           let rub = 73;
           let money = +prompt('Введите стоимость покуки в евро');
                return money * doll * rub;
               };
        
        console.log(`Сумма покупки ${convert().toFixed(2)} руб.`);
        
        
        
        

