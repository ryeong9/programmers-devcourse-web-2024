function foo(...rest) {
  console.log(rest);
}
foo(...[1, 2, 3]);

let arr3 = [1, 4];
let arr4 = [2, 3];
// arr3.splice(1, 0, arr4);
// console.log(arr3);
arr3.splice(1, 0, ...arr4);
console.log(arr3);

const origin = [1, 2];
const copy = [...origin];
console.log(copy);
console.log(copy === origin);

const object = { x: 1, y: 2 };
const copy1 = { ...object };
console.log(copy1);
console.log(object === copy1);

const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged);

// const merged1 = Object.assign({}, { x: 1, y: 2 }, { y: 3, x: 3 });
// console.log(merged1);
const merged1 = { ...{ x: 1, y: 2 }, ...{ y: 3, x: 3 } };
console.log(merged1);

const arr5 = [1, 2, 3];
const [one, two, three] = arr5;
console.log(one, two, three);

const [a, b] = [1, 2];
console.log(a, b);
const [c, d] = [1];
console.log(c, d); //1 undefined => 배열 기준은 인덱스

const user = { firstName: "Kim", lastName: "Lee" };
const { lastName, firstName } = user;
console.log(lastName, firstName);

function printTodo({ content, completed }) {
  console.log(`할 일 ${content}는 ${completed ? "완료" : "미완료"}`);
}
printTodo({ id: 1, content: "HTML", completed: true });

const user2 = {
  name: "Lee",
  address: {
    zipCode: "07638",
    city: "Seoul",
  },
};
const {
  address: { city },
} = user2;
console.log(city);

// Quiz.1 객체 person을 만들고, name과 age를 구조 분해 할당하고 변수 userName과 userAge에 각각 저장한 후, 두 변수를 활용하여 console.log(`이름: ${userName}, 나이: ${userAge}`)출력하시오.
const person = {
  name: "Kim",
  age: 25,
};
const { name: userName, age: userAge } = person;
console.log(`이름: ${userName}, 나이: ${userAge}`);

// Quiz.2 다음 객체를 스프레드 연산자를 사용하여 복사하고, model "전기차"로 수정한 새로운 객체 ndwCar생성하는 코드 작성
const car = { brand: "현대", model: "아이오닉", year: 2023 };
const newCar = { ...car, model: "전기차" };
console.log(newCar);

// Quiz.3 다음 두 배열을 스프레드 연산자를 사용하여 하나의 배열로 합친 후, 중복된 값을 제거한 배열을 출력하는 코드를 작성
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const array3 = [...array1, ...array2];

const newArr = [...new Set(array3)];
console.log(newArr);
