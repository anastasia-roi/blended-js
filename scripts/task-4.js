// //   Правила приведення різних типів до числа:
// //   true --> 1
// //   false --> 0
// //   '' --> 0
// //   null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, 
// відбувається приведення до числа.В іншому випадку - NaN.

console.log(2 + 5 + "" + 1 + 0 - 10); //700
console.log("" + 1 - 0); //1
console.log(true + false); //1
console.log(true + ""); // true
console.log(true + "false"); //truefalse
console.log(true - "false"); // NaN
console.log(6 / "3"); // 2
console.log("2" * "3"); //6
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN