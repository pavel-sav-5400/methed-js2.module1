'use strict'

{
   const product = 'Двигатель';
   const count = 15;
   const category = 'Автозапчасти';
   const cost = 50000;

   console.log('Наименование товара:', product);
   console.log('Общая сумма товара:' , count * cost);
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

   console.log(`На складе ${count} шт. товара:${product} на сумму ${count * cost} руб.`);
   
}

