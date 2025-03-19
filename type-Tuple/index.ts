// 🔹 Tuple: Kiểu dữ liệu cố định số lượng phần tử
let person: [string, number] = ["Alice", 25];


// Tuple với Optional  - (?)
let product: [string, number, boolean?];

product = ["Laptop", 1000];      // ✅ Không cần boolean
product = ["Laptop", 1000, true]; // ✅ Có boolean cũng hợp lệ

let colorHex: [number, number, number, number?];

colorHex = [255, 0, 0];          // ✅ Mô tả màu RGB


// ✅ Tuple với rest parameter
let numbers: [string, ...number[]];

numbers = ["Danh sách", 1, 2, 3, 4, 5]; // ✅ Hợp lệ


// Tuple và destructuring
let employee: [string, number] = ["Alice", 28];

const [name, age] = employee;
console.log(name); // Output: "Alice"
console.log(age);  // Output: 28
