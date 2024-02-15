let fruit = ["apple", "mango", "strawberry", "pineapple"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log("누나가 좋아하는 과일은", fruit[i]);
// }

// 2. for.. of 순회가 가능한 변수에 대해서만 가능하다. object가 하나인겨우 number같은거는 사용 x
// for (let item of fruit) {
//   console.log("누나가 좋아하는 과일은", item);
// }

// let sentence = "누나는 코딩을 너무 좋아해";
// for (let char of sentence) {
//   console.log("char", char);
// }

//3, for in
let person = {
  name: "누나",
  age: 25,
  cute: true,
};
//for in 은 키값을 확인 할 때 쓰인다. 즉 객체의 키값이 동적일 때
//ex 내가 어떤 객체값을 받을 껀데 무슨 값을 받을지 모를 때. 객체의 값이 상황에 따라 다르게 받을 때
// for (let key in person) {
//   console.log("key", key);
//   if (key === "cute") {
//     console.log("누나는 귀엽니?", person[key]);
//   }
// }

//배열에 key값은 index이다. 배열이랑 for in 을 쓸일은 거의 없음
for (let key in fruit) {
  console.log("key", key);
}
