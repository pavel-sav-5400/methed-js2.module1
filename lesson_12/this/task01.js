'use strict';

const rectangle = {
  width: 7,
  height: 5,
  get perimeter() {
    return `Периметр примоугольника ${(this.width + this.height) * 2} см`;
  },
  set perimeter(value) {
    this.width = value;
  },
  get area() {
    return `Площадь прямоугольника ${this.width * this.height} см`;
  },
  set area(value) {
    this.height = value;
  },
  
};
console.log(rectangle.perimeter);
console.log(rectangle.area);
