// Trong TypeScript, void được sử dụng để chỉ ra rằng, một hàm không trả về giá trị.
// Có thể return undefined

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello TypeScript!"); // Output: "Hello TypeScript!"
