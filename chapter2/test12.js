//1
function greet(Name) {
  console.log("안녕 내 이름은 ", Name + "야");
}

// greet("subeen");

//2
// function meetAt(year, month, date) {
//   if (year) {
//     return `${year}년`;
//   } else if (year && month) {
//     return `${year}년``${month}월`;
//   } else if (year && month && date) {
//     return `${year}/${month}/${date}`;
//   }
// }
function meetAt(year, month, date) {
  if (date) {
    return `${year}/${month}/${date}`;
  }
  if (month) {
    return `${year}년 ${month}월`;
  }
  if (year) {
    return `${year}년`;
  }
}

// console.log(meetAt(2022, 1, 7));

// console.log(meetAt(2022, 1, 7));
// console.log(meetAt(2022, 1, 7));
//무조건 큰 숫자를 if 앞에 넣어라 그렇게 안하면 return 되어서 나머지 값을 입력을 못한다.

//3
function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}

// console.log(findSmallestElement[(100, 200, 3, 0, 2, 1)]); 밑에 식과 같다.
// let smallestNumber = findSmallestElement([100, 200, 3, 0, 2, 1]);
// console.log(smallestNumber);

// console.log(findSmallestElement([]));

//6번문제풀이 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
// 12300인 경우
// 50000 * 0
// 10000 * 1
// 5000 * 0
// 1000 * 2
// 500 * 0
// 100 * 3

let unit = [50000, 10000, 5000, 1000, 500, 100];
function giveMeChange(money) {
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]); //Math.floor 는 소수점을 버리는 것
    console.log(`${unit[i]}X${num}`);
    money = money - unit[i] * num;
  }
}
giveMeChange(12300);

//휴우 휴우
