class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    get diameter() {
      return 2 * this.radius;
    }
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * (this.radius **= 2);
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(x) {
        this.radius = x / 2;
    }
}