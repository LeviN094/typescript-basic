// Kiểu dữ liệu tùy chỉnh (Type Aliases) -----------
// Type Alias trong TypeScript cho phép bạn định nghĩa một kiểu dữ liệu tùy chỉnh bằng từ khóa "type". Nó giúp bạn đặt tên cho các kiểu phức tạp và dễ sử dụng lại.

type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "John",
  age: 30
};

console.log('Type Aliases: ', user1)

//✅ Type Alias cho Union Type
type Status = number | string | boolean;

let orderStatus: Status = "pending"; // ✅ Hợp lệ


// 
type StatusNew = "pending" | "shipped" | "delivered";

let orderStatusNew: StatusNew = "pending"; // ✅ Hợp lệ
// let invalidStatus: Status = "canceled"; // ❌ Lỗi: "canceled" không có trong Status


// ✅ Type Alias với Function Type
type AddFn = (a: number, b: number) => number;

const add: AddFn = (x, y) => x + y;

console.log(add(5, 3)); // Output: 8
