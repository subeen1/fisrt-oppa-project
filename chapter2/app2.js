//자료형과 연산자

//1 string
// let passwrod4 = "12345" //string

//2 숫자(데이터 타입)
// let passwrod3 = 12345

//3 boolean:논리연산에 쓰이는  데이터타입 true and flase
// let password = true
// let password2 = false
// let password = 1;
// password = password > 2;
// console.log(password);

// let password = 2
//  password = password >= 2 || password >1  //or

// let password = 2
//  password = password >= 2 && password >1  //and

// let password = 5;
// password = password % 10; //%는 나머지 연산자
// console.log(password);

//test
// const pu = 1 + 2 * 3;
// console.log(pu);

// const pu = 5 == "5";
// console.log(pu);

// //var와 let의 차이
// 우리는 변수를 선언 할 때 const, var, let을 사용한다.
// 이 중에 const는 상수를 만드는 것이다. 즉 변하고 싶지 않은 값 ex 아이디 and 패스워드
// 그런데 여기서 let과 var의 차이점은 애매하다.
// 일단은 let보다는 var가 먼저 나왔다.

// var의 문제점은 위 코드에서 나타난다
// console.log(a) error값이 나와야 하는데 undefined로 값이 나온다.
// var a = 1
// console.log(a) 여기서는 값이 1이 나온다

// 여기서 더 많은 문제가 생기는데
// const는.log(a)
// a = 1
// var a
// console,log(a) 위에 a를 변수 선언하지 않았음에도 불구하고 값이 출력된다.

// var는 전역변수와 지역변수에
// 전역변수: 블락 밖에서 선언을 한 어디서든 쓰일 수 있는 변수
// 지역변수: 블락{}안에서 선언된 변수, 블락안에서만 쓸 수 있음
//  ex) var a = 2
//      function foo() {
//         var b =1
//      }
//       console.log(b) //에러가 뜬다

//  그런데 for(var i =1; i<5; i++){
//     const는.log(i)
//  }
//  console.log(i) 여기서 i변수가 바깥에서 호출 하는거라서 error가 뜨는게 맞다
//                 하지만 var라서 error 값이 안 뜨고 결과값이 출력이 된다.

// var a = 1
// console.log(a)
// var a = 2
// console.log(a)  var는 같은 변수가 2개 저장했음에도 불구하고 결과값이 출력이된다.
