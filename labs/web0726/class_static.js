class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // static 메서드 => this 사용 불가능 (인스턴스 ❌)
  static makeRandomFruit() {
    return new Fruit("banana", "🍌"); // 새로운 오브젝트 반환
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit의 인스턴스
const apple = new Fruit("apple", "🍎");
console.log(apple);
// 인스턴스 레벨은 클래스 이름으로 접근 불가능
// => 인스턴스를 통해서만 가능함
console.log(Fruit.name);

// static 메서드 출력 => 클레스 이름으로 접근 가능
const banana = Fruit.makeRandomFruit();
console.log(banana);
