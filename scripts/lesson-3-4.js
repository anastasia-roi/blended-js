/**
 *? Функція приймає масив об'єктів і повертайте такий же масив об'єктів
 *? Зробіть знижку на всі фрукти у масиві на 20%
 *? Надайте ід для кожного продукту
 *? Функція немає мутувати початковий масив
 */
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];
function apdateFructs(array) {
    return array.map((element, index) => ({...element, price:element.price * 0.8 ,id:index + 1} ));

}
console.log(apdateFructs(fruits))
