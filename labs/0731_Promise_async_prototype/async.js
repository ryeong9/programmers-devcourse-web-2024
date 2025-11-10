// function 앞에
async function sayHello() {
  return "안녕";
}
sayHello().then(console.log);

// 함수 표현식
let sayHello2 = async function () {
  return "안녕2";
};
sayHello2().then(console.log);

// 화살표 함수
let sayHello3 = async () => "안녕3";
sayHello3().then(console.log);

// class
class Greeter {
  async sayHello4() {
    return "안녕4";
  }
}
const greeter = new Greeter();
greeter.sayHello4().then(console.log);

// Promise
async function sayHello5() {
  return Promise.resolve("안녕5");
}
sayHello5().then(console.log);

async function sayHello6() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("안녕6"));
  });
}
sayHello6().then(console.log);

// await
// 성공할 때
async function sayHello7() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("안녕7"), 3000);
  });
}
async function display() {
  let result = await sayHello7();
  console.log(result);
}
display();
// 거부될 때 => try, catch 사용
async function sayHello8() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("거부"), 3000);
  });
}
async function display() {
  try {
    let result = await sayHello8();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
display();

// 순차적 Promise처럼 만들기
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
function findUser(users, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.find((user) => user.name === name));
    }, 1000);
  });
}
function getEmail(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user.email);
    }),
      3000;
  });
}
async function getUserEmail(name) {
  let users = await getUser();
  let user = await findUser(users, name);
  let email = await getEmail(user);
  return email;
}
async function displayUserEmail() {
  let email2 = await getUserEmail("Kim");
  console.log(email2);
}
displayUserEmail();
