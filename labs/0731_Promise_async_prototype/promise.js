let success = true;
function getUser() {
  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => {
        resolve([
          { name: "Kim", email: "kim@gmail.com" },
          { name: "Lee", email: "lee@gmail.com" },
          { name: "Park", email: "park@gmail.com" },
        ]);
      }, 1000);
    } else {
      reject("실패");
    }
  });
}
let promise = getUser();
// then => 반환하는 값 구하기 위해 사용, 체인으로 연결 가능
// catch => 거부됨 상태 처리
promise
  .then((users) => users.find((user) => user.name === "Kim"))
  .then((user) => console.log(user.email))
  .catch((error) => console.log(error))
  .finally(() => console.log("작업 완료"));

// 병렬 Promise
const p1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(10), 2000)
);
const p2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(20), 1000)
);
const p3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("실패함"), 3000)
);
let promises = [p1, p2, p3];

// 원래는 하나만 reject여도 실패인데,
// 실행이 완료돠기만을 기다리다가 성공된 것만 이라도 가져오기
Promise.allSettled(promises).then((result) => {
  const fulfilledResults = result
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);
  const total = fulfilledResults.reduce((sum, value) => sum + value, 0);
  console.log(`결과: ${fulfilledResults}`);
  console.log(`합계: ${total}`);
});

// 순차 Promise
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "Kim", email: "kim@gmail.com" },
        { name: "Lee", email: "lee@gmail.com" },
        { name: "Park", email: "park@gmail.com" },
      ]);
    }, 2000);
  });
}
function findUser(users) {
  return new Promise((resolve, reject) => {
    console.log(users);
    setTimeout(() => {
      resolve(users.find((user) => user.name === "Kim"));
    }, 1000);
  });
}
function getEmail(user) {
  return new Promise((resolve, reject) => {
    console.log(user);
    setTimeout(() => {
      resolve(user.email);
    }),
      3000;
  });
}
getUser().then(findUser).then(getEmail).then(console.log);

// 제너레이터와 프로미스
const myPromise = () =>
  new Promise((resolve) => {
    resolve("value is ");
  });

function* gen() {
  let result = "";
  // 프로미스를 반환
  yield myPromise().then((data) => {
    result = data;
  });
  // 프로미스의 결과를 기다린 후에 이 값을 사용
  yield result + "1";
}
const asyncFunc = gen(); // 비동기 함수 호출
const val1 = asyncFunc.next();
console.log(val1);

val1.value.then(() => {
  console.log(asyncFunc.next());
});

function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout = 1000) {
  let next = from;
  while (next <= to) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => resolve(next), timeout);
      next += interval;
    });
  }
}
(async () => {
  let seq = asyncSequence(2, 10, 2);
  for await (let value of seq) console.log(value);
})();
