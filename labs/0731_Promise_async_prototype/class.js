function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype = {
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
};
let pt1 = new Point(10, 20);
let pt2 = new Point(100, 200);
console.log(pt1.toString());
console.log(pt2.toString());
console.log(pt1 instanceof Point); // true
console.log(pt2 instanceof Point); // true

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};
const circle1 = new Circle(1);
const circle2 = new Circle(2);
console.log(circle1.getArea === circle2.getArea);

class Person {
  constructor(name) {
    this.name = name;
  }
  // 프로토타입
  sayHI() {
    console.log(`Hi ${this.name}`);
  }
  // 정적 메서드
  static sayHello() {
    console.log("Hello");
  }
}
const me = new Person("Lee");
me.sayHI();
Person.sayHello();

const Person = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHI = function () {
    console.log("Hi " + this.name);
  };
  Person.sayHello = function () {
    console.log("Hello");
  };
  return Person;
})();
const me1 = new Person("Lee");
console.log(me1.name);
me1.sayHI();
Person.sayHello;

class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // 프로토타입
  area() {
    return this.width * this.height;
  }
  // 정적 메서드
  static area2(width, height) {
    return width * height;
  }
}
const square = new Square(10, 10);
console.log(square.area());
console.log(Square.area2(20, 10));

const person1 = {
  firstName: "seung-min",
  lastName: "Kim",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split("");
  },
};
console.log(`${person1.firstName} ${person1.lastName}`);
console.log(person1.fullName);

class Person {
  #name = "";
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name.trim();
  }
}
const me2 = new Person("Lee");
console.log(me2.name);

// 상속
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle("자전거", 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}
const myBicycle = new Bicycle("따릉이", 2);
console.log(myBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}
const myCar = new Car("페라리", 4, true);
console.log(myCar);

// super
class Base {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi ${this.name}.잘 지냈니?`;
  }
}
class Derived extends Base {
  sayHi() {
    return `${super.sayHi()}`;
  }
}
const derived = new Derived("Lee");
console.log(derived.sayHi());
