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

// function calculateAverage() {
//     let total = 0;
//     let count = 0;
//     for (const num of arguments) {
//         if (typeof num === "number") {
//             total += num;
//             count++;
//         }
        
//     }
//     return total / count;

// }
// console.log(calculateAverage(1, 3, 6, 7, "a"));


//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//     premium: true,
  
// };
// user.mood = "happy"
// user.hobby = "skydiving"
// user.premium = false
// const arrayKeys = Object.keys(user)
// for (const key of arrayKeys) {
    
//     console.log(`${key} : ${user[key]}`)
// }


//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0
// const salaries = {
// //   Mango: 100,
// //   Poly: 160,
// //   Ajax: 1470,
// };
// let sum = 0;
// const values = Object.values(salaries)
// for (const value of values) {
//     sum += value;
// }
// console.log(sum)


//3. Напишіть ф-цію calcTotalPrice(fruits, fruitName),
//яка приймає массив об'єктів і
//рядок з назвою фрукта.
//Функція рахує і повертає загальну вартість фрукта
//з таким ім'ям, ціною та кількістю з об'єкта
// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
// ];
// function calcTotalPrice(fruits, fruitName) {
//     let totalPrice = 0;
//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             totalPrice += fruit.price * fruit.quantity;
//        }
//     }
//     return totalPrice;
// }
// console.log(calcTotalPrice(fruits, "Яблуко"))



//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// const calculator = {
//     read(a, b) {
//         this.valueA = a;
//         this.valueB = b;
//      },
//     sum() {
//         if (!this.valueA || !this.valueB) {
//             return "error"
//         }
//         return this.valueA + this.valueB;
//      },
//     mult() {
//            if (!this.valueA || !this.valueB) {
//             return "error"
//         }
//         return this.valueA * this.valueB;
//     },
// }
// // console.log(calculator.read(5, 10))
// console.log(calculator.sum())
// console.log(calculator.mult())
 



// 6. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;
const phonebook = {
  contacts: [],
    add(data) {
        const newContact = {
            name: data.name,
            email: data.email,
            category: data.category ?? "default",
            id: this.generateId(),
            createdAt: this.getDate(),

        }
        this.contacts.push(newContact)
  },
    list() {
      console.table(this.contacts)
  },
    filtered(category) {
        const filteredContacts = [];
        for (const contact of this.contacts) {
            if (contact.category === category) {
                filteredContacts.push(contact)
            }
            
        }
        console.table(filteredContacts)
  },
    delete(name) {
        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            if (contact.name === name) {
                this.contacts.splice(i, 1)
                
            }
            
        }
     },
    updateName(oldName, newName) {
        for (const contact of this.contacts) {
            if (contact.name === oldName) {
                contact.name = newName;
            }
            
        }
    },
  generateId() {
    return "#" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};
phonebook.add({ name: "Ann", email: "drf@ngcvhgv", category: "family" })
phonebook.add({ name: "Oleksii", email: "drf@ngv" })
phonebook.add({ name: "Sonia", email: "drf@ng", category: "friends" })
phonebook.delete("Ann")
phonebook.updateName("Oleksii", "Vasilii")
phonebook.list()
phonebook.filtered("family")
