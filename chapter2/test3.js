// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   //다음과같은경우 0부터 10까지 전부 출력이 된다.
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i % 7 == 0) {
//     console.log("7의 배수입니다.");
//     break;
//   }
// }

//1부터 100까지 더하기
// for (let i = 1; i <= 100; i++) {
//   for (let j = 1; j <= 100; j++) {
//     console.log(i + "+" + j + "=" + i + j);
//   }
// }
// let sum = 0
// for(let i=1;i<=100;i++){
//  sum+=i
// }
// console.log(sum)

//2 1부터 100까지 홀수만 출력
// for (let n = 1; n <= 100; n++) {
//   if (n % 2 !== 0) {
//     console.log("홀수입니다.", n);
//   }
// }

// for(let i=1;i<=100;i+=2){
//     console.log(i)
//   }

//3
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log("짝", i);
//   }
// }

//4
// let n = 2;
// let isPrime = true;

// if (n === 1) {
//   // 1은 소수가 아님
//   isPrime = false;
// }

// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     isPrime = false; // 2부터 n-1까지의 숫자 중 어떤 수로도 나누어 떨어진다면 소수가 아님
//   }
// }

// console.log(isPrime);

//5 369문제
// i=i+1 => i++

//여기서 i는 때에 따라서 숫자,짝,짝짝 이렇게 3개의 변수가 있다.
// 39 짝짝
for (let i = 1; i <= 50; i++) {
  let stringValue = i.toString(); //여기서 i라는 함수를 toString 즉 string으로 바꾸겠다라는 뜻
  let result = "";
  for (let j = 0; j < stringValue.length; j++) {
    if (
      stringValue[j] === "3" ||
      stringValue[j] === "6" ||
      stringValue[j] === "9"
    )
      result = result + "짝"; // result += "짝"
  }
  console.log(result.length > 0 ? result : i); //만약 result의 값이 0보다 크면 즉 글자 하나 이상이 들어가있으면 i가 나온다.
}
