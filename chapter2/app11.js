//함수 함수는 어떤 일의 단위입니다. 또한 자주쓰는 내용들을 묶어서 함수로 만들어두면 필요할때 언제든 불러다 쓸 수 있씁니다.
//함수를 만들면 내가 필요할 때 마다 불러서 쓸 수 있다
//1. function으로 작업의 단위들을 묶어줘야한다.
function makeBurger(type, size, num) {
  console.log("매개변수 값은?", type);
  console.log("빵두기");
  console.log("상추두기");
  if (num < 1) {
    return "버거 개수가 0개 입니다.";
  }
  if (type == "불고기") {
    console.log("고기패티두기");
  } else if (type == "새우") {
    console.log("새우페티넣기");
  }
  console.log("뚜껑덥기");
  console.log(type, "버거", size, "사이즈", num, "개 준비완료");
  return "주문완료되었습니다.";
}

function serveCoke() {
  console.log("골라통 선택");
  console.log("얼음담기");
  console.log("콜라담기");
}

function serveFrenchFries() {
  console.log("감자박스선택");
  console.log("감튀 담기");
}

//함수를 불러야 실행이 된다. 많은 학생들이 함수를 부르는걸 적지않아서 실수한다.
let result = makeBurger("불고기", "M", 0);
// console.log("버거 프로세스 결과", result);

//2 버거세트 만들어보기
function makeSet() {
  makeBurger("새우", "M", 2);
  serveFrenchFries();
  serveCoke();
}
makeSet();

//11겅 예시문 손으로 작성해보기

//예시문
function su(type) {
  console.log("오늘의 컨디션 점수는?", type, "점이야");
}

su(100);

function greet(firstName, lastName) {
  console.log("hello", firstName, lastName, "Welcome to our website");
}
greet("Noona", "Kim");
