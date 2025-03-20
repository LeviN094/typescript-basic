// readonly trong TypeScript được sử dụng để ngăn không cho thay đổi giá trị của thuộc tính sau khi đã được khởi tạo.

// 🔹 Ví dụ: readonly trong class
class User {
  readonly id: number;  // Không thể thay đổi sau khi khởi tạo
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user = new User(1, "Alice");

console.log(user.id); // ✅ In ra: 1

user.name = "Bob"; // ✅ Có thể thay đổi
// user.id = 2;  // ❌ Lỗi: Cannot assign to 'id' because it is a read-only property


// ✅ 2. readonly với Interface
interface Product {
  readonly sku: string;
  name: string;
}

const product: Product = { sku: "P001", name: "Laptop" };

product.name = "Gaming Laptop"; // ✅ Hợp lệ
// product.sku = "P002";  // ❌ Lỗi: Cannot assign to 'sku' because it is a read-only property

// ✅ 3. readonly với Mảng (ReadonlyArray<T>)
const numbers: ReadonlyArray<number> = [1, 2, 3];

// numbers.push(4);   // ❌ Lỗi: Property 'push' does not exist on type 'readonly number[]'
// numbers[0] = 10;   // ❌ Lỗi: Index signature in type 'readonly number[]' only permits reading

console.log(numbers[0]); // ✅ Hợp lệ: Có thể đọc giá trị


// ✅ 4. readonly với Tuples
const point: readonly [number, number] = [10, 20];

// point[0] = 30; // ❌ Lỗi: Cannot assign to '0' because it is a read-only property
console.log(point[0]); // ✅ Hợp lệ
