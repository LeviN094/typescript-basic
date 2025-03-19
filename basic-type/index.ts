// Example
let isActive: boolean = true;

// -------------------- Number-------------------------
let age: number = 25;
const totalTs1 = (x:number, y:number):number => {
  return x + y;
};
console.log('check num ==>', totalTs1( 6, 3));

// ---------------- String ------------------------
const stringVar:string = 'check';
console.log('uppercase', stringVar.toUpperCase());


// --------------------------------------------
// ----------------  Object --------------------------------
let user: { name: string, age: number } = {
  name: "John",
  age: 30
};
console.log('Object type', user);

//---------------- Array ------------------------------
let numbers: number[] = [1, 2, 3];
let flags: boolean[] = [true, false, true];
let names: string[] = ["Alice", "Bob"];

// Sử dụng Array<string> khi làm việc với các kiểu dữ liệu phức tạp hoặc generic types.
let nameUser: Array<string> = ["Alice", "Bob"];

console.log('Array', numbers, names);

// ------------- Function --------------------------------
function add(a: number, b: number): number {
  return a + b;
}
// : number định nghĩa type trả về của function
console.log('Function', add(1, 2));

// Kiểu dữ liệu tùy chỉnh (Type Aliases) -----------
type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "John",
  age: 30
};

console.log('Type Aliases: ', user1)