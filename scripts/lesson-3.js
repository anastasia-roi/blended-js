/**
 *? Напишіть ф-цію calcTotalPrice(stones, stoneName),
 *? яка приймає масив об'єктів та
 *? рядок із назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */
const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 6 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 150, quantity: 100 },
];
function calcTotalPrice(stones, stoneName) {
    for (const stone of stones) {
        if (stone.name === stoneName) {
            return stone.price * stone.quantity;
        }
    }
    return "Not found"
}
console.log(calcTotalPrice(stones, "гнорао"))