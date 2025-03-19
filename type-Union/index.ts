// 🔹 Union Type: Có thể nhận nhiều kiểu dữ liệu
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');