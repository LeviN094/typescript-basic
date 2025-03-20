// 2. Access Modifiers (public, private, protected)
// public: Có thể truy cập từ mọi nơi.
// private: Chỉ có thể truy cập bên trong class.
// protected: Truy cập được trong class và class con.

class Person {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getAge(): number {
    return this.age;
  }
}

class Employee extends Person {
  constructor(name: string, age: number, address: string, public salary: number) {
    super(name, age, address);
  }

  getAddress(): string {
    return this.address; // ✅ Có thể truy cập vì `address` là protected
  }
}

const emp = new Employee("Alice", 25, "New York", 5000);
console.log(emp.name); // ✅ public: truy cập được
// console.log(emp.age); // ❌ Lỗi: age là private
// console.log(emp.address); // ❌ Lỗi: address là protected
console.log(emp.getAddress()); // ✅ Được phép thông qua method trong class con
