//보너스 트랙:switch문과 삼항 연산식
// let menu = 1;
// if (menu == 1) {
//   console.log(2);
// } else if (menu == 2) {
//   console.log("잔고확인");
// }else if ( menu == 3) {
//     console.log("히스토리확인")
// }else {
//     console.log("홈으로 돌아가기")
// }

//스위치문이 조금 더 제한이 있다. 값이 하나로 딱 떨어지는 경우에만 사용 가능
//ex) if (i<menu && menu <4) 요런식은 if문만 가능하다

// switch (menu) {
//   case 1:
//     console.log("물건사기");
//     break;
//   case 2:
//     console.log("잔고확인");
//     break;
//   case 3:
//     console.log("히스토리확인");
//     break;
//   default:
//     console.log("홈으로 돌아가기");
//     break;
// }

// **삼항 연산식  조건?true 일때 : false 일때
//삼항 연산식 조건 1 조건이 많지 않고 2. 반환하고싶은값 딱하나만 코드에 있을때
let menu = 2;
// if (menu <= 3) {
//   console.log("범위안에 숫자입니다.");
// } else {
//   console.log("범위 밖의 숫자입니다.");
// }
//위의 식과 동일하다.
// let answer = menu <= 3 ? "범위안에 숫자입니다." : "범위 밖의 숫자입니다.";
// console.log(answer);

let food = "고구마";
let answer =
  food == "피자" ? "피자좋아" : food == "햄버거" ? "햄버거 좋아" : "다 싫어";
console.log(answer);
