        'use strict'
          

        const convert = () => {
           let doll = 1.2;
           let rub = 73;
           let money = +prompt('Введите стоимость покуки в евро');

                const eurToDol = () => {
                 return money * doll
                  
           }; 
           const doll1 = eurToDol();
           console.log(eurToDol());

                const dolToRub = () => {
                 return doll1 * rub    
                };
                console.log(dolToRub());


           return dolToRub();
           
        };
        
        
        
        console.log(`Сумма покупки ${convert()} руб.`);
        
        
        
        /*let a = +prompt(''),
            b = 1.2,
            с = 0,
            res = a * b;
            console.log('res: ', res);*/
            

