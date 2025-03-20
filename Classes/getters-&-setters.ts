// Getters (get) và Setters (set) giúp kiểm soát cách truy cập và cập nhật giá trị của thuộc tính trong một class.

class PersonNew {
  private name: string;
  private age: number;
  public email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

}

let personNew = new PersonNew('Ton', 25, 'test@gmail.com');

// console.log(personNew.name) Error Property 'name' is private and only accessible within class 'PersonNew'
// personNew.name = '12323';   Error Property 'name' is private and only accessible within class 'PersonNew'


// ✅ 1. Cách dùng get (Getter)
class Person5 {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person5 = new Person5("John", "Doe");
console.log(person5.fullName); // ✅ Kết quả: "John Doe"


// ✅ 3. Kết hợp get và set
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get area(): number {
    return this._width * this._height;
  }

  set width(value: number) {
    if (value <= 0) throw new Error("Chiều rộng phải lớn hơn 0");
    this._width = value;
  }

  set height(value: number) {
    if (value <= 0) throw new Error("Chiều cao phải lớn hơn 0");
    this._height = value;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // ✅ Kết quả: 50

rect.width = 15; // ✅ Cập nhật width
console.log(rect.area); // ✅ Kết quả: 75

// rect.height = -10; // ❌ Lỗi: "Chiều cao phải lớn hơn 0"

