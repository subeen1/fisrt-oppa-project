//4 배열 (배열은 엑셀같은 시스템이다)
//관련있는 데이터들을 하나로 묶어서 하나의 변수 아래에 저장하는 것
let fruits = ["banana", "apple", "grape", "mango"];
// console.log(fruits);

// console.log(fruits[0]); //여기에 있는 번호를 인덱스라고 한다. 인덱스는 0부터 시작한다.

//배열에 있는 값을 변경 하고싶을 때
// fruits[0] = "cherry";
// console.log(fruits);
// fruits[2] = "coconut";
// console.log(fruits);

//배열이랑 함께 쓸 수 있는 함수들
// fruits.pop();
// console.log(fruits);

// fruits.push("pineapple");
// console.log(fruits);

//includes 해당 아이템을 배열이 포함하고 있는지 알려줌
// console.log(fruits.includes("apple"));
// console.log(fruits.includes("tomato"));

// indexOf 아이템의 인덱스를 찾아줌
// console.log(fruits.indexOf("grape"));
// console.log(fruits.indexOf("cherry")); //없는 값을 적을 때는 -1이 나온다.

//slice() & splice()
// console.log(fruits.slice(2));
//내가 apple과 grape만 짤라내고 싶다

//slice: 배열 아이템을 잘라내는 역활(시작점, 끝점-끝점 미포함)
//slice는 기존의 배열을 건들이지 않음 즉 새로운 배열을 만드는 거임, 내가 기존 배열을 바꿔야 하면 splice
// console.log(fruits.slice(1, 3)); //1번부터 3번 이전 까지
let extrafruits = fruits.slice(1, 3);
console.log(extrafruits);

//splice: 배열 아이템 잘라내는 역활 (시작점,개수)
//splice는 기존 배열이 잘림, 잘린값을 빼서 새 배열을 만들고 싶으면 slice
fruits.splice(2, 1); //2부터 시작해서 1개의 아이템을 제거
console.log(fruits);

console.log(fruits.splice(2, 1)); // 그래서 이 값은 틀린 값이 나온다.
