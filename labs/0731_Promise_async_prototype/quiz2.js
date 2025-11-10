// Quiz.1 => 1초 뒤에 A를, 2초 뒤에 B를 반환하는 두개의 Promise를 생성하고
// 두 Promise가 모두 완료된 후에 완료!를 출력
const promiseA = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("A완료");
  }, 1000)
);
const promiseB = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("B완료");
  }, 2000)
);
let promises = [promiseA, promiseB];

Promise.all(promises)
  .then((results) => {
    console.log(`${results}`);
  })
  .finally(() => console.log("완료!"));

// Quiz.2 => 1초 후에 숫자 5를 반환하는 Promise와 1.5초 후에 그 숫자를 10 곱한 값을 반환하는 Promise 작성, 만약, 5를 반환하는 Promise가 실패하면 "에러!" 출력
let success = false;

const promiseJ = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve(5);
    } else {
      reject("error");
    }
  }, 1000);
});
promiseJ
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num * 10);
      }, 1500);
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Quiz.3 => 제너레이터를 사용하여 여러 비동기 작업을 순차적으로 실행하는 함수를 작성하시오. 각 작업은 2초 후에 완료된다고 가정하고, 작업이 완료될 때마다 그 결과를 출력해야 함, 제너레이터는 작업이 완료될 때마다 다음 작업을 실행해야 함
function* taskGenerator() {
  yield new Promise((resolve) => {
    setTimeout(() => {
      resolve("1완료");
    }, 2000);
  });
  yield new Promise((resolve) => {
    setTimeout(() => {
      resolve("2완료");
    }, 2000);
  });
  yield new Promise((resolve) => {
    setTimeout(() => {
      resolve("3완료");
    }, 2000);
  });
}

const tasksDisplay = async () => {
  const tasks = taskGenerator();
  for (let task of tasks) {
    const result = await task;
    console.log(result);
  }
};
tasksDisplay();

// Quiz.4 => 사용자 정보를 가져오는 비동기 함수를 작성하고, 이를 async/await를 사용하여 호출하시오
function userData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "A", age: 25 },
        2: { name: "B", age: 30 },
        3: { name: "C", age: 35 },
      };
      const user = users[userId];
      if (user) {
        resolve(user);
      } else {
        reject("사용자를 찾을 수 없습니다");
      }
    }, 1000);
  });
}

async function getUser(userId) {
  try {
    const userDataGet = await userData(userId);
    console.log(`${userDataGet.name},${userDataGet.age}`);
  } catch (error) {
    console.error(error);
  }
}
getUser(4);

// Quiz.5 => Book 이라는 생성자 함수를 만들고 프로토타입을 이용하여 프로퍼티를 추가하세요 (title,author,price)/생성할 프로토타입 = 출판일
function Book(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;
}
Book.prototype.year = "1999";

// Quiz.6 => Person이라는 클래스를 만들고 "안녕하세요 제 이름은{이름}이고, 나이는 {나이}입니다" 문자열 반환하기
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  doIntroduce(name, age) {
    console.log(
      `안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}입니다.`
    );
  }
}
const me3 = new Person("김승민", 25);
me3.doIntroduce();

// Quiz.7 => Calculator 클래스 또는 생성자함수를 작성하고 정적 메서드를 추가하여 숫자를 더하고 빼는 기능을 구현
// 클래스 => constructor 필요없는지?
class Calculator {
  static Plus(a, b) {
    return a + b;
  }
  static Minus(a, b) {
    return a - b;
  }
}
console.log(Calculator.Plus(20, 10));
console.log(Calculator.Minus(20, 10));

// 생성자 함수
function Calculator() {}
Calculator.Plus = function (a, b) {
  return a + b;
};
Calculator.Minus = function (a, b) {
  return a - b;
};
console.log(Calculator.Plus(252, 52));
console.log(Calculator.Minus(252, 52));
