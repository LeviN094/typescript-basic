// Trong TypeScript, static methods và static properties được sử dụng để khai báo các phương thức và thuộc tính có thể truy cập mà không cần tạo một instance của class.
// 📌 
// static giúp truy cập trực tiếp qua class, không cần khởi tạo đối tượng (new Class).
// Thường được dùng cho hàm tiện ích (utility functions) hoặc biến dùng chung.


// ✅ 1 static voi thuoc tinh
class MathUtils {
  static PI: number = 3.14159;
}

console.log(MathUtils.PI); // ✅ 3.14159

// ✅ 2 static voi method
class MathUtils2 {
  static add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils2.add(5, 3)); // ✅ 8


// ✅ 3. Static với Private
class Config {
  private static secretKey: string = "abc123";

  static getSecret(): string {
    return this.secretKey;
  }
}

// console.log(Config.secretKey); // ❌ Lỗi: 'secretKey' is private
console.log(Config.getSecret()); // ✅ "abc123"
// private static giúp bảo vệ dữ liệu, chỉ có thể truy cập qua method getSecret().

// ✅ 4 Static trong kế thừa (Inheritance)
class Parent2 {
  static message(): string {
    return "Hello from Parent";
  }
}

class Child1 extends Parent2 {}

console.log(Child1.message()); // ✅ "Hello from Parent"


// 📌 Nếu tạo 1 class mới bằng new (tạo instance từ lớp con), class con sẽ ko truy cập được vào biến hoặc method static
class Parent {
  message: string;
  
  constructor(message: string) {
    this.message = message;
  }
  
  static Log(): string {
    return "Hello from Parent";
  }

  sayHello(): void {
    console.log(this.message);
  }
}

let Child = new Parent('123');

console.log(Child.Log()); // Error access the static
console.log(Child.sayHello()); // ✅ "123"
