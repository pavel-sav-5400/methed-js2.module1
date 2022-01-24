'use strict'

const cart = {
    items: [],
    count: 0,
    get totalPrice() {
        return this.calculateItemPrice();
    },
    set totalPrice(value) {
        this.calculateItemPrice = value;
    },
        
    add(elem, price, count) {
        this.items.push({elem, price, count});
        this.increaseCount(1);
    },
    increaseCount(i) {
        return this.count += i;
    },
    calculateItemPrice() {
        return this.items.map(item => item.price * item.count).reduce((a, b) => a + b);
        
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
cart.totalPrice = 344;
cart.add('Чайник', 3600, 3);
cart.add('Планшет', 2400, 5);
cart.add('Микроволновка', 6300, 2);
cart.add('Телефон', 2700, 4);
cart.add('Холодильник', 15000, 1);
//cart.clear();
cart.print();


console.log('items: ', cart.items);
console.log('count: ', cart.count);
console.log('totalPrice: ', cart.totalPrice);
