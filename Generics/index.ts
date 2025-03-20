// Generics trong TypeScript giúp tạo ra các hàm, interface hoặc class có thể hoạt động với nhiều kiểu dữ liệu mà vẫn giữ được tính an toàn của kiểu (type safety).
// Thay vì sử dụng kiểu dữ liệu cố định như string, number, boolean, ta sử dụng placeholder (T, U, V...) để đại diện cho kiểu dữ liệu, giúp tái sử dụng code và giảm trùng lặp.

// 1. Generics với function
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // function identity<string>(value: string): string ---> "Hello" 
console.log(identity<number>(42)); // // function identity<number>(value: number): number --->  42

// 2. Generics với Interface
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  success: true,
  data: { id: 1, name: "John Doe" },
};

const numbersResponse: ApiResponse<number[]> = {
  success: true,
  data: [1, 2, 3, 4],
};


// 3. Generics với Class
class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getValue()); // 100

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Hello

