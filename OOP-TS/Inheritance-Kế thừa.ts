// ✅ 2. Inheritance (Kế thừa)
class Animal {
  constructor(public name: string) {}

  makeSound(): string {
    return "Some sound...";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof woof!";
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.name); // ✅ "Buddy"
console.log(myDog.makeSound()); // ✅ "Woof woof!"