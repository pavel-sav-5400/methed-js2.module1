'use strict'

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice
    },

    add(elem, price, count) {
        this.items.push({elem, price, count});
        this.increaseCount(1);
        this.getTotalPrice();
    },

    increaseCount(i) {
        return this.count += i
    },

    calculateItemPrice() {
        return this.items.map(item => item.price * item.count).reduce((a, b) => a + b)
        
    },
   

    clear() {
        for (const prop of Object.keys(cart)) {
            delete cart[prop];
          }
    },

    print() {
       let strItems = JSON.stringify(this.items) + 'Общая стоимость: ' + JSON.stringify(this.totalPrice)
       
       return strItems;
       
    },
    
    
};







console.log('Общая стоимость: ', cart.getTotalPrice());
cart.add('Чайник', 3500, 3);
cart.add('Фен', 2400, 5);
cart.add('Микроволновка', 6300, 2);
console.log('Увеличение кол-ва товара: ', cart.increaseCount(0));
console.log(cart.calculateItemPrice());
//console.log(cart.clear());
console.log(cart.print());
console.log('Count ', cart.count);

console.log('cart.items: ', cart.items);


