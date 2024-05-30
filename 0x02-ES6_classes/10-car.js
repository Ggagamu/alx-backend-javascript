export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Cloning the class
  cloneCar() {
    const typ = this.constructor || [Symbol.species];
    return new typ();
  }
}
