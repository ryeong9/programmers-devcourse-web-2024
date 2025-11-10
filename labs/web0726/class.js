class Fruit {
  // new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 보통 함수는 constructor 밖에 정의
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit의 인스턴스
const apple = new Fruit("apple", "🍎");
console.log(apple);
