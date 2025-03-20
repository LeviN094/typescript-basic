// Định nghĩa class nhưng không triển khai, giúp dễ mở rộng.
// Định nghĩa một class trừu tượng
abstract class Animal {
  constructor(public name: string) {}

  // Phương thức trừu tượng - không có phần triển khai
  abstract makeSound(): void;

  // Phương thức bình thường
  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

// Lớp con bắt buộc phải triển khai phương thức trừu tượng
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow! Meow!");
  }
}

// ✅ Có thể tạo instance từ lớp con
const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

myDog.makeSound(); // Woof! Woof!
myCat.makeSound(); // Meow! Meow!
myDog.move(); // Buddy is moving.


// Abstraction với Interface
interface Vehicle {
  brand: string;
  speed: number;
  accelerate(): void;
}

// Lớp Car phải triển khai tất cả các thuộc tính và phương thức của interface
class Car implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  accelerate(): void {
    this.speed += 10;
    console.log(`${this.brand} is now going at ${this.speed} km/h`);
  }
}

const myCar = new Car("Toyota", 50);
myCar.accelerate(); // Toyota is now going at 60 km/h
