interface Shape {
  getArea(): number;
}

class Circle implements Shape {

  // 생성자 방법1
  // radius: number;
  //
  // constructor(radius: number) {
  //   this.radius = radius;
  // }

  // 생성자 방법2
  constructor(public radius: number) {}

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // 생성자 방법 1
  // width: number;
  // height: number;
  //
  // constructor(width: number, height: number) {
  //   this.width = width;
  //   this.height = height;
  // }

  // 생성자 방법 2
  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);

