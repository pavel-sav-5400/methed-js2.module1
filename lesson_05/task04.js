        'use strict'

        const calculate = (basketAmount = +prompt('сумма'), basketProd = +prompt('колво'), promo = prompt('промо')) => {
                
               
                const totalAmount3 = () => {
                  if (basketProd > 10) {
                       return basketAmount * 0.03
                       
                        
                } else {
                  return 0
                }
              };
                //console.log('3 % колво > 10 ' + totalAmount3());
                
                const totalAmount15 = () => {
                if (basketAmount > 30000) {
                         return (basketAmount - 30000) * 0.15
                         
                } else {
                  return 0
                }
              };
                //console.log('15 % > 30000 ' + totalAmount15());

                const totalAmount10 = () => {
                  if (promo === 'METHED') {
                        return basketAmount * 0.10
                        
                } else {
                  return 0
                }
              };
                //console.log('10 % methed ' + totalAmount10());

                let discount = totalAmount3() + totalAmount15() + totalAmount10();
                //console.log('скидка' +  discount);
                

                const totalAmount500 = () => {
                  if (promo === 'G3H2Z1' && (basketAmount - discount) > 2000)
                         {
                              return  500
                        } else {
                          return 0
                        }
                        
                };
                //console.log('500 руб G3H2Z1 ' + totalAmount500());
                let totalAmount = basketAmount - discount - totalAmount500();
                console.log('Итоговая стоимость корзины - ' + totalAmount);
                
                
        };
        calculate();