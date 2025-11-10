// apple 단어 포함 여부 확인
// let str = "I love Apple pie and apple juice";
// let pattern = /apple/gi;
// let result = str.match(pattern);
// document.getElementById("show").innerHTML = result;

// 모든 대문자 찾기 => Hello World! This is a Test String
// let str = "Hello World! This is a Test String";
// let pattern = /[A-Z]/g;
// let result = str.match(pattern);
// document.getElementById("show").innerHTML = result;

// "1 10 100 2000 30000" => 100, 200, 300 이 나오도록 정규식으로 작성
// let str = "1 10 100 2000 3000";
// let pattern = /\d{3}/g;
// let result = str.match(pattern);
// document.getElementById("show").innerHTML = result;

// How do you do의 결과가 o,d,o,o,d,o 가 나오도록 정규식 작성
// let str = "How do you do";
// let pattern = /[do]/g;
// let result = str.match(pattern);
// document.getElementById("show").innerHTML = result;

// 89139012349 9,9,0,9가 실행되도록 정규식 작성
// let str = "89139012349";
// let pattern = /[^1-8]/g;
// let result = str.match(pattern);
// document.getElementById("show").innerHTML = result;

// A AA B BB Aa Bb AAA = A가 최소 1번 최대 2번 반복되는 문자열 검색
// let str = "A AA B BB Aa Bb AAA";
// let pattern = /A{2,}/g;
// let result = str.match(pattern);
// document.getElementById("show").innerHTML = result;

// AA BB 12 345 0~9가 한번 이상 반복되는 문자열 검색
let str = "AA BB 12 345";
let pattern = /[0-9]+/g;
let result = str.match(pattern);
document.getElementById("show").innerHTML = result;
