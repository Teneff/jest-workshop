// source https://eli.thegreenplace.net/2013/10/22/classical-inheritance-in-javascript-es5

export function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

function Circle(x, y, r) {
  Shape.call(this, x, y);

  this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
  return (this.r ** 2) * Math.PI;
};

export default Circle;
