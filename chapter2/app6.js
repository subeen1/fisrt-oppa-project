//06 객체 나는 병원장이야~~ 근데 환자 정보를 보고싶어
let patient = {
  name: "jimin",
  age: 17,
  disease: "cold",
};

// console.log(patient);
// console.log(patient.name);
// console.log(patient["age"]);
// patient.name = "jackson";
// patient.age = 22;
// console.log(patient);

let patientList = [
  { name: "jimmin", age: 23 },
  { name: "jk", age: 25 },
  { name: "jackson", age: 24 },
];

console.log(patientList);
console.log("첫번째 환자는", patientList[0]);
console.log("첫번째 환자는", patientList[0]["age"]); // = patientList[0].age
console.log("두번째 환자의 이름", patientList[1].name);
