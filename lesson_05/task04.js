        'use strict'

        const calculate = (basketAmount = +prompt('сумма'), basketProd = +prompt('колво'), promo = prompt('промо')) => {
                let disc3,
                    disc15,
                    discMethed,
                    discG3H2Z1;
               
                  if (basketProd > 10) {
                       disc3 = basketAmount * 0.03
                  } else {
                       disc3 = 0
                }
            
                //console.log('3 % колво > 10 ' + disc3);
                               
                if (basketAmount > 30000) {
                        disc15 = (basketAmount - 30000) * 0.15
                         
                } else {
                        disc15 = 0
                }
             
                //console.log('15 % > 30000 ' + disc15);

                  if (promo === 'METHED') {
                        discMethed = basketAmount * 0.10
                        
                } else {
                        discMethed = 0
                }
              
                //onsole.log('10 % methed ' + discMethed);

                  if (promo === 'G3H2Z1' && (basketAmount - (disc3 + disc15 + discMethed)) > 2000)
                         {
                              discG3H2Z1 = 500
                        } else {
                          discG3H2Z1 = 0
                        }
                                       
                //console.log('500 руб G3H2Z1 ' + discG3H2Z1);
                return basketAmount - (disc3 + disc15 + discMethed + discG3H2Z1);
             };
        console.log('Итоговая стоимость корзины ' + calculate());
        