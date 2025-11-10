/* get과 set은 무언가를 처리하는 행동은 아닌데, 무언가를 조합해서 만들거나 
get,set으로 특정한 일을 좀 더 하고 싶을 때 유용하게 사용함*/

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // fullName이 호출되는 시점에 데이터를 만들어서 return
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  // 할당을 할 때 이 함수가 호출
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student("승민", "김");

// console.log(student.fullName());
// get 사용하면, 이처럼 함수로 호출하지 않아도 되고
// 아래처럼 속성에 접근하듯이 호출 가능
console.log(student.fullName);

// set 호출하기
student.fullName = "김승민";
