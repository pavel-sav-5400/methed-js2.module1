'use strict'

const cart = {
    items: [
        'Чайник', 'Фен', 'Утюг' 
    ],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice
    },
    add() {
        return this.items
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
console.log(cart.getTotalPrice());
console.log(cart.add());
console.log(cart.increaseCount(1));
console.log(cart.calculateItemPrice());
console.log(cart.clear());
console.log(cart.print());

