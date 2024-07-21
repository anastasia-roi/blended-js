// У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.
// (falsy) значення, що приводяться до false у логічному перетворенні:
// 0
// NaN
// null
// undefined
// порожній рядок
// false.
// Абсолютно все інше приводиться до true.

// && - запинається на false
// // Якщо всі операнди були приведені до true, повертається остання.
// // Якщо результат приведення операнди до буля false, 
//перевірка зупиняється та повертається вихідне значення цього операнда.
// || - запинається на true
// Повертає перше правдиве (приведене до true) значення або останнє, 
//якщо таке truthy значення не знайдено.
// ! - інвертує true в false, або false в true

console.log(true && 3); //3
console.log(false && 3); //false
console.log(false && false); //false
console.log(true && 4 && "kiwi"); // kiwi
console.log(true && "" && "kiwi"); //""
console.log(true && " " && "kiwi"); //  kiwi
console.log(true && 0 && "kiwi"); //0
console.log(true || 3);//true
console.log(true || 3 || 4); //true
console.log(true || false || 7); // true
console.log(false || true || 7); //true
console.log(null || 2 || undefined); //2
console.log((1 && null && 2) > 0); //false
console.log(null || (2 && 3) || 4); //3
console.log(null || (null && 3) || 4);//4


