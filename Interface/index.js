// Interface trong TypeScript là một cách để định nghĩa cấu trúc của một object. Nó giúp đảm bảo rằng một object có đúng các thuộc tính cần thiết và giúp code dễ bảo trì hơn.
var user = {
    id: 1,
    name: "John Doe",
};
var user1 = { id: 1, name: "John" }; // ✅ Hợp lệ
var user2 = { id: 2, name: "Alice", email: "alice@example.com" }; // ✅ Hợp lệ
var user3 = { id: 1, name: "John" };
user.name = "Alice"; // ✅ Hợp lệ
var add = function (x, y) { return x + y; };
console.log(add(5, 3)); // Output: 8
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}());
var dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof! Woof!
var emp = {
    name: "Alice",
    age: 30,
    employeeId: 101,
};
var translations = {
    hello: "Xin chào",
    goodbye: "Tạm biệt",
};
console.log(translations["hello"]); // Output: Xin chào
