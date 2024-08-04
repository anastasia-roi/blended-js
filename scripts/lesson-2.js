// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// const index = styles.indexOf('Блюз');
// styles[index] = 'Класика';

// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles);



// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"



// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogins(logins) {
//     const name = prompt("Enter your name");
//     const isCheck = logins.includes(name);
//     // if (isCheck) {
//     //     return "Доступ дозволено";
//     // }
//     // return "Користувач не знайден";
//     return isCheck ? "Доступ дозволено" : "Користувач не знайден";
// }
// console.log(checkLogins(logins));


// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum(someArr) {
//     const newArr = [];
//     for (let i = 0; i < someArr.length-1; i++){
//         const indexSum = someArr[i] + someArr[i + 1];
//         newArr.push(indexSum);
//     } return newArr;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sum(someArr));


//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function calculateAverage() {
    let total = 0;
    let count = 0;
    for (const num of arguments) {
        if (typeof num === "number") {
            total += num; 
            count++;
        }
        
    }
    return total / count;

}
console.log(calculateAverage(1, 3, 6, 7, "a"));
