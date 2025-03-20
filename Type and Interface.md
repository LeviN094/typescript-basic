🔍 So sánh type và interface
✅ 1. Điểm giống nhau
Cả type và interface đều giúp định nghĩa kiểu dữ liệu cho object.

Ví dụ:
// Dùng type
type UserType = {
  name: string;
  age: number;
};

// Dùng interface
interface UserInterface {
  name: string;
  age: number;
}

const user1: UserType = { name: "Alice", age: 25 };
const user2: UserInterface = { name: "Bob", age: 30 };
✅  Cả hai đều hoạt động giống nhau.


❌ 2. Sự khác biệt quan trọng

🔹 (1) Interface có thể mở rộng (extends), còn type thì không
* interface có thể mở rộng bằng extends, giúp tái sử dụng tốt hơn.
* type thì không thể mở rộng trực tiếp (nhưng có thể dùng & để hợp nhất).
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

const emp: Employee = { name: "John", salary: 5000 }; // ✅ OK

--> Còn type thì phải dùng toán tử &:
type Person = { name: string };
type Employee = Person & { salary: number };

const emp2: Employee = { name: "John", salary: 5000 }; // ✅ OK


🔹 (2) Interface có thể được khai báo lại (declaration merging)
* Nếu khai báo hai lần cùng một interface, TypeScript sẽ tự động gộp chúng lại.
* Còn type thì không thể khai báo lại.