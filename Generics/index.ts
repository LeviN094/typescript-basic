// Generics giúp code linh hoạt và tái sử dụng tốt hơn.

class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getValue()); // 100

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Hello
