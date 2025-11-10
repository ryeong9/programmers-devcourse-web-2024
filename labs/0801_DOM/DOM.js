let div = document.querySelector("div");
console.log(div);
function changeContent() {
  div.outerHTML = "<h1>DOM API</h1><p>선수 조건: 없음</p>";
}

// const ele = document.getElementById("banana");
// ele.style.color = "red"; // 같은 ID 3개 중에 첫번째 요소만 바꿈
// 3개 다 빨간색으로
// const ele = document.getElementsByTagName("li");
// [...ele].forEach((ele) => {
//   ele.style.color = "red";
// });

// const elems = document.getElementsByClassName("fruit");
// [...elems].forEach((elems) => {
//   elems.style.color = "blue";
// });
// const apple = document.getElementsByClassName("fruit apple");
// [...apple].forEach((apple) => (apple.style.color = "red"));

// const boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function () {
//   //   if (boxEl.classList.contains("active")) {
//   //     boxEl.classList.remove("active");
//   //   } else {
//   //     boxEl.classList.add("active");
//   //   }
//   console.log("Click");
//   boxEl.classList.toggle("active"); // 위에 있는 if문을 간단하게
// });

const boxEls = document.querySelectorAll(".box");
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
});

const div2 = document.getElementById("my_div");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");

div2.addEventListener("click", (e) => {
  result.innerHTML = "<div>click</div>";
});
div2.addEventListener("mousedown", (e) => {
  result.innerHTML = "<div>mousedown</div>";
});
div2.addEventListener("mouseup", (e) => {
  result.innerHTML = "<div>mouseup</div>";
});
clearBtn.addEventListener("click", () => {
  result.innerHTML = "";
});

function sayHi(name) {
  console.log(`Hi ${name}`);
}

const msg = document.querySelector(".message");
function showCoords(e) {
  msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
}
document.onclick = showCoords;

const fruits = document.getElementById("fruits");
function activate({ target }) {
  if (!target.matches("#fruits > li")) return;
  [...fruits.children].forEach((fruit) => {
    fruit.classList.toggle("active", fruit === target);
  });
}
fruits.onclick = activate;
