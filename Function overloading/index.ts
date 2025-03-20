// Function Overloading trong TypeScript cho phép bạn khai báo nhiều phiên bản của cùng một hàm với các tham số và kiểu trả về khác nhau. Điều này giúp TypeScript hiểu và kiểm soát kiểu dữ liệu khi gọi hàm.

// 1. Khai báo các chữ ký overload
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;

// 2. Khai báo hàm thực hiện chính
function sum(a: any, b: any): any {
  return a + b;
}

// 3. Gọi hàm với các kiểu dữ liệu khác nhau
console.log(sum(10, 20));      // Output: 30
console.log(sum("Hello, ", "TypeScript!")); // Output: Hello, TypeScript!
