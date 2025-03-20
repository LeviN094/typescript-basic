class Person {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}
const person = new Person("John", 30);
console.log(person.greet());


// ✅ Class với Access Modifier (private, protected, public)
// ✅ 1. public (Mặc định)
// public cho phép truy cập thuộc tính hoặc phương thức từ bất kỳ đâu.
class Person1 {
  public name: string; // Thuộc tính công khai

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person1("John");
console.log(person1.name); // ✅ Hợp lệ
person1.greet(); // ✅ Hợp lệ

// 🔒 2. private (Chỉ có thể truy cập bên trong class)
// private dùng để ẩn dữ liệu khỏi bên ngoài class.
class Person2 {
  private age: number; // Chỉ truy cập bên trong class

  constructor(age: number) {
    this.age = age;
  }

  public getAge() {
    return this.age; // ✅ Có thể truy cập bên trong class
  }
}

const person2 = new Person2(25);
// console.log(person2.age); // ❌ Lỗi: Không thể truy cập thuộc tính private
console.log(person2.getAge()); // ✅ Hợp lệ: Truy cập thông qua phương thức


// 🔐 3. protected (Chỉ có thể truy cập trong class và class con)
class Animal {
  protected species: string; // Chỉ truy cập trong class hoặc class con

  constructor(species: string) {
    this.species = species;
  }
}

class Dog extends Animal {
  public showSpecies() {
    console.log(`I am a ${this.species}`); // ✅ Hợp lệ vì Dog kế thừa Animal
  }
}

const dog = new Dog("Canine");
dog.showSpecies(); // ✅ Hợp lệ
// console.log(dog.species); // ❌ Lỗi: species là protected
// species chỉ có thể truy cập từ Animal và các class kế thừa (Dog).
// Bên ngoài class, species không thể truy cập trực tiếp.
