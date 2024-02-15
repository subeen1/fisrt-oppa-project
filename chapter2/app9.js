//프로그래밍은 왜 하는걸까? 내가 하기 싫은 일들을 컴퓨터가 하기 위해서이다.
//for문 (내가 정확히 얼만큼 for문을 돌리고싶은지 범위를 알때) 배열에서 많이 쓰임
// for (let i = 1; i <= 10; i++) {
//   console.log("누나", i);
// }

//짝수문
//1)
// for (let i = 0; i <= 10; i += 2) {
//   console.log("누나", i);
// }
//2)
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log("누나", i);
//   }
// }

//이중for문 (for문을 너무 많이 돌리면 프로그램 성능에 안좋음)
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

//while문 (for문을 분해해둔 느낌, 내가 정확히 범위를 알 수 없어 하지만 어떤 순간에 버튼이 클릭 될 때 끝은 나도 모르지만)
// let i = 2;
// while (i<10) {
//   console.log("while문 실행", i);
//   i++; //증감식
// }

//for 은 배열을 위해 쓰인다.
let fruits = ["banan", "apple", "grappe", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
