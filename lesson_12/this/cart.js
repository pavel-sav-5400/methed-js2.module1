'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set totalPrice(value) {
    this.calculateItemPrice = value;
  },
  get setDiscount() {
    return this.discount;
  },
  set setDiscount(promo) {
    if (promo === 'METHED') {
      this.discount = 15;
    }
    if (promo === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  add(elem, price, count) {
    this.items.push({elem, price, count});
    this.increaseCount(1);
  },
  increaseCount(i) {
    return this.count += i;
  },
  calculateItemPrice() {
    return this.items.map(item =>
    item.price * item.count).reduce((a, b) => a + b) - ((this.items.map(item =>
    item.price * item.count).reduce((a, b) => a + b)) * this.discount / 100);
  },
  clear() {
    for (const prop in this) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.hasOwnProperty(prop)) {
        this[prop] = 0;
      }
    }
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log('Общая стоимость: ' + JSON.stringify(this.totalPrice));
  },
};
cart.setDiscount = 'METHED';
cart.add('Чайник', 3600, 3);
cart.add('Планшет', 2400, 5);
cart.add('Микроволновка', 6300, 2);
cart.add('Телефон', 2700, 4);
cart.add('Холодильник', 15000, 1);
// cart.clear();
cart.print();
