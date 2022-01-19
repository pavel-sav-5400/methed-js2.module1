'use strict'

const cart = {
    items: [
        
    ],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice
    },
    add(elem, price, count) {
        return cart.items.push(elem, price, count);
  
    },
    increaseCount(i) {
        return this.count + i
    },
    calculateItemPrice() {

    },
    clear() {

    },
    print() {

    },
};
console.log('Общая стоимость: ', cart.getTotalPrice());
console.log('Метод add: ',  cart.add('Чайник', 4000, 3));
console.log('Увеличение кол-ва товара: ', cart.increaseCount(1));
console.log(cart.calculateItemPrice());
console.log(cart.clear());
console.log(cart.print());

console.log('cart.items: ', cart.items);

