// 접근 제어자
// private(#) - 외부에서 접근 불가능, 출력해도 볼 수 없음
// public(기본) - 외부에서 볼 수는 있으나, 접근 불가능

class Fruit {
  #name;
  #emoji; // name,emoji는 외부로부터 전달받은 데이터
  #type = "과일"; // 클래스가 만들어지면 '과일'로 초기화됨
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

// apple은 Fruit의 인스턴스
const apple = new Fruit("apple", "🍎");
// apple,#name = '오렌지' // 접근 불가능 - 에러뜸
console.log(apple);
