// ✅ Tuple với rest parameter
let numbers: [string, ...number[]];

numbers = ["Danh sách", 1, 2, 3, 4, 5]; // ✅ Hợp lệ

// Rest with function
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15