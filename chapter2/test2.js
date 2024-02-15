//1

// let a = 2;
// if (a < 0) {
//   console.log("이 숫자는 음성입니다.");
// } else if (a == 0) {
//   console.log("이 숫자는 0입니다");
// } else {
//   console.log("이 숫자는 양성입니다.");
// }

//2
// let score =  90
// let grade =''
// if(90<=score && score<=100){
//   grade = "A"
// }else if(80<=score && score<=89){
//   grade = "B"
// }else if(70<=score && score<=79){
//   grade ="C"
// }else if(60<=score && score<=69){
//   grade="D"
// }else if(0<=score && score<=59){
//   grade="F"
// }else {
//   console.log("잘못된 범위의 점수입니다")
// }
// console.log(grade)

//3
// let skills = ["HTML", "CSS", "Javascript", "React"];

// if (skills.includes("Javascript") && skills.includes("React")) {
//   console.log("합격!");
// } else if (skills.includes("Javascript") || skills.includes("React")) {
//   console.log("예비");
// } else {
//   console.log("탈락!");
// }

let skills = ["HTML", "Javascript", "React", "CSS"];
if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격!");
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비");
} else {
  console.log("불합격");
}
