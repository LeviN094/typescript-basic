// 🔹 Union Type: Có thể nhận nhiều kiểu dữ liệu
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');


//✅ Type Alias cho Union Type
type Status = number | string | boolean;

let orderStatus: Status = "pending"; // ✅ Hợp lệ


// 
type StatusNew = "pending" | "shipped" | "delivered";

let orderStatusNew: StatusNew = "pending"; // ✅ Hợp lệ
// let invalidStatus: Status = "canceled"; // ❌ Lỗi: "canceled" không có trong Status
