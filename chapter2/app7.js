//if문
//if문 작성 할 때 주의 해야 할 것은 범위를 작은것 부터 큰거 순으로

// if (age > 20) {
//   console.log("운전이 가능합니다.");
// } else if(age >=18){
//   console.log("오토바이 운전이 가능합니다.");
// }else {
//     console.log("운전이 불가능합니다.");
//   }

// and
// let age = 18;
// if (18 <= age && age < 20) {
//   console.log("오토바이 운전만 가능합니다.");
// } else if (age > 20) {
//   console.log("운전이 가능합니다.");
// } else {
//   console.log("운전이 불가능합니다.");
// }

//or
// let age = 21;
// if (18 <= age || age < 20) {
//   console.log("오토바이 운전만 가능합니다.");
// } else if (age > 20) {
//   console.log("운전이 가능합니다.");
// } else {
//   console.log("운전이 불가능합니다.");
// }

//조건문안에 조건문
let age = 10;
let licence = false;
if (age > 20) {
  if (licence == true) {
    console.log("운전이 가능합니다");
  } else {
    console.log("면허를 따세요");
  }
} else {
  console.log("운전이 불가능합니다.");
}
