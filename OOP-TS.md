<!-- TypeScript hỗ trợ mạnh mẽ lập trình hướng đối tượng (OOP - Object-Oriented Programming) với các tính năng như class, interface, inheritance, encapsulation, polymorphism, abstraction... -->

🎯 1. Các nguyên tắc của OOP trong TypeScript

- Encapsulation (Đóng gói): 	Ẩn dữ liệu, chỉ cho phép truy cập qua các method.
- Inheritance (Kế thừa): 	Class con kế thừa class cha, có thể mở rộng hoặc override method.
- Polymorphism (Đa hình): 	Một method có thể có nhiều cách thực thi khác nhau.
- Abstraction (Trừu tượng hóa): 	Định nghĩa class nhưng không triển khai, giúp dễ mở rộng.

✅ 1 Encapsulation (Đóng gói) 
* Dùng private, protected, public để kiểm soát truy cập dữ liệu.
class BankAccount {
  private balance: number = 0; // Không thể truy cập từ bên ngoài

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
// console.log(myAccount.balance); // ❌ Lỗi: 'balance' is private
console.log(myAccount.getBalance()); // ✅ 100


✅ 2. Inheritance (Kế thừa)
class Animal {
  constructor(public name: string) {}

  makeSound(): string {
    return "Some sound...";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof woof!";
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.name); // ✅ "Buddy"
console.log(myDog.makeSound()); // ✅ "Woof woof!"


✅ 3. Polymorphism (Đa hình)
📌 Lưu ý:
- Circle và Rectangle đều kế thừa Shape.
- Cả hai đều có getArea(), nhưng cách tính khác nhau.

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
