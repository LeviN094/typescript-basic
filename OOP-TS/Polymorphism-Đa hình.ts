// Polymorphism (Đa hình): 	Một method có thể có nhiều cách thực thi khác nhau.
// ✅ 3. Polymorphism (Đa hình)
// 📌 Lưu ý:
// - Circle và Rectangle đều kế thừa Shape.
// - Cả hai đều có getArea(), nhưng cách tính khác nhau.

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach((shape) => console.log(shape.getArea()));
// ✅ In ra diện tích của từng hình