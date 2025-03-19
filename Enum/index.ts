// Trong TypeScript, enum (enumeration) là một cách để định nghĩa một tập hợp các giá trị đặt tên. Có hai loại chính của enum: số và chuỗi hoặc hỗ hợp

// 1. Numeric Enum (Enum số)
enum Status {
  Pending,   // 0
  Approved,  // 1
  Rejected   // 2
}

let orderStatus: Status = Status.Approved;
console.log(orderStatus); // Output: 1

// Mặc định, giá trị của phần tử đầu tiên sẽ là 0, và các phần tử tiếp theo tăng dần (1, 2, ...). Bạn cũng có thể gán giá trị cụ thể:
enum Status1 {
  Pending = 10,
  Approved = 20,
  Rejected = 30
}

console.log(Status1.Pending);  // Output: 10
console.log(Status1["Approved"]); // Output: 20



// 2. String Enum (Enum chuỗi)
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Left;
console.log(move); // Output: "LEFT"


// 4. Enum với const (const enum). Dùng const enum để tối ưu hiệu suất (loại bỏ enum khi biên dịch):

// ⚡ Lưu ý: const enum không có object mapping, chỉ có thể truy cập giá trị trực tiếp.

const enum Color {
  Red = "RED",
  Blue = "BLUE",
  Green = "GREEN"
}

console.log(Color.Red); // Output: "RED"
