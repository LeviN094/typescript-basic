// Trong TypeScript, kiểu never đại diện cho một giá trị không bao giờ xảy ra. Điều này có nghĩa là một biến kiểu never không thể được gán bất kỳ giá trị nào, kể cả undefined hoặc null.

// VD Hàm không bao giờ trả về:
// Không thể return gì cả.
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("This will never end.");
  }
}