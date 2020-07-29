export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  static plus(a, b) {
    const p = new Vector(a.x + b.x, a.y + b.y);
    return p;
  }

  static minus(a, b) {
    const m = new Vector(a.x - b.x, a.y - b.y);
    return m;
  }

  distance() {
    const d = this._x * this._x + this._y * this._y;
    return Math.sqrt(d);
  }
}
