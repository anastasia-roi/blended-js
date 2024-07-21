// Результатом порівняння буде бульове значення.
// При порівнянні різних типів, операнди наводяться до числа 
//(за винятком порівняння  з використанням операторів ===, !==)
//  null не дорівнює нічому крім себе та undefined
//  undefined не дорівнює нічому крім себе та null
// NaN не дорівнює нічому, навіть самому собі

console.log(null == 0); //false
console.log(undefined == 0); //false
console.log(undefined == null); //true
console.log("123" == 123); //true
console.log(true == "1"); //true
console.log(NaN === NaN); // false
console.log("4" != 4); // false
console.log("4" !== 4); // true
console.log(null > 0); //false
console.log(null >= 0); // true