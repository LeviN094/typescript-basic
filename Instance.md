🔍 Instance là gì?
Instance nghĩa là một đối tượng cụ thể được tạo ra từ một class (hoặc constructor function).

📌 Nói đơn giản: nếu class là bản thiết kế, thì instance là ngôi nhà được xây từ bản thiết kế đó.


🛠 Ví dụ trong JavaScript:
class User {
  constructor(name) {
    this.name = name;
  }
}

const user1 = new User("Alice"); // user1 là một instance của class User
const user2 = new User("Bob");   // user2 là một instance khác

console.log(user1 instanceof User); // true
console.log(user2 instanceof User); // true

Ở đây:
User là class (bản thiết kế).
user1, user2 là các instance (đối tượng thực tế) của class đó.
Mỗi lần gọi new User(...) là tạo ra một instance mới.
