// Ex
function sum(a:number, b:number, c = false) {
  return a + b;
}

console.log(sum(3,4));

const sum1 = (a:number, b:number) => a + b;

console.log(sum1(3,4));

// ✅ Type Alias với Function Type
type AddFn = (a: number, b: number) => number;

const add: AddFn = (x, y) => x + y;

console.log(add(5, 3)); // Output: 8