'use strict'

{
   const product = 'Двигатель';
   const count = 15;
   const category = 'Автозапчасти';
   const cost = 50000;


}

{
   const product = 'Микроволновка';
   const count = 50;
   const category = 'Бытовая техника';
   const cost = 6000;
}

{
   const product = prompt('Наименование товара');
   const count = +prompt('Количетво товара');
   const category = prompt('Категория товара');
   const cost = +prompt('Цена товара');

   
   
   if (isNaN(count) || isNaN(cost)) {
   console.log('Вы ввели некорректные данные');
} else {
   console.log(`На складе ${count} шт. товара: ${product} на сумму ${count * cost} руб.`);
};

}


