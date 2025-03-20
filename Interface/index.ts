// Interface trong TypeScript là một cách để định nghĩa cấu trúc của một object. Nó giúp đảm bảo rằng một object có đúng các thuộc tính cần thiết và giúp code dễ bảo trì hơn.

interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
};


// 2. Interface với Optional Properties (?)
interface User1 {
  id: number;
  name: string;
  email?: string; // Optional (có thể có hoặc không)
}

const user1: User1 = { id: 1, name: "John" }; // ✅ Hợp lệ
const user2: User1 = { id: 2, name: "Alice", email: "alice@example.com" }; // ✅ Hợp lệ

// 3. Interface với Readonly Properties (readonly)
interface User2 {
  readonly id: number;
  name: string;
}

const user3: User2 = { id: 1, name: "John" };
user.name = "Alice"; // ✅ Hợp lệ
// user.id = 2; // ❌ Lỗi: Không thể gán lại giá trị cho thuộc tính readonly


// 4. Interface với Function Type
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;

console.log(add(5, 3)); // Output: 8

// 5. Interface với Class (implements)
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof! Woof!


// 6. Interface kế thừa Interface (extends)
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 101,
};
// Employee kế thừa Person, có thêm thuộc tính employeeId.


// 7. Interface với Index Signature (Dùng khi không biết trước key)
interface Dictionary {
  [key: string]: string;
}

const translations: Dictionary = {
  hello: "Xin chào",
  goodbye: "Tạm biệt",
};

console.log(translations["hello"]); // Output: Xin chào
