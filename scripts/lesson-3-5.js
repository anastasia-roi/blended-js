/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
const concerts = {
  Київ: new Date('2020-04-01'),
  Умань: new Date('2025-07-02'),
  Вінниця: new Date('2020-04-21'),
  Одеса: new Date('2025-10-15'),
  Хмельницький: new Date('2020-04-18'),
  Харків: new Date('2025-08-10'),
};
function filterConcerts(obj) {
  const cities = Object.keys(obj);
  console.log(cities);
  return cities.filter(city => Date.now() < concerts[city]).sort((a, b) => concerts[a] - concerts[b]);
  
}
console.log(filterConcerts(concerts));