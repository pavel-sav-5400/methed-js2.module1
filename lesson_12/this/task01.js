'use strict';

const rectangle = {
  width: 5,
  height: 5,
  get per() {
    return `Периметр прямоугольника ${(this.width + this.height) * 2} см`;
  },
  set per(value) {
    if (typeof value === 'number') {
      this.width = value;
    }
  },
  get area() {
    return `Площадь прямоугольника ${this.width * this.height} см`;
  },
  set area(value) {
    if (typeof value === 'number') {
      this.height = value;
    }
  },

};

console.log(rectangle.per);
console.log(rectangle.area);
