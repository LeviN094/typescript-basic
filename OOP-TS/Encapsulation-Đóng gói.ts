// Ẩn dữ liệu, chỉ cho phép truy cập qua các method.

class PersonNew {
  private name: string;
  private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

}

let personNew = new PersonNew('Ton', 25);

// 📌 Giải thích: name và age là private, chỉ có thể truy cập qua phương thức get fullName() bên dưới.

console.log(personNew.name)  //Error Property 'name' is private and only accessible within class 'PersonNew'
personNew.name = '12323';   //Error Property 'name' is private and only accessible within class 'PersonNew'


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