'use strict'

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice;
    },
    add(elem, price, count) {
        this.items.push({elem, price, count});
        this.increaseCount(1);
        this.getTotalPrice();
        this.calculateItemPrice();
    },
    increaseCount(i) {
        return this.count += i;
    },
    calculateItemPrice() {
        let x = 0;
        x = this.items.map(item => item.price * item.count).reduce((a, b) => a + b);
        return this.totalPrice = x;
    },
    clear() {
        for (const prop in cart) {
        if (cart.hasOwnProperty(prop))
        cart[prop] = 0;
        }
       
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log('Общая стоимость: ' + JSON.stringify(this.totalPrice));
    },
};

cart.add('Чайник', 3500, 3);
cart.add('Планшет', 2400, 5);
cart.add('Микроволновка', 6300, 2);
cart.add('Телефон', 2700, 4);
cart.add('Холодильник', 15000, 1);
//cart.clear();
cart.print();