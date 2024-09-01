//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const btn = document.querySelector("#alertButton")
const input = document.querySelector("#alertInput")
btn.addEventListener("click", () => {console.log(input.value)})

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const btnEl = document.querySelector('#swapButton');
const leftSwapInputEl = document.querySelector("#leftSwapInput");
const rightSwapInputEl = document.querySelector("#rightSwapInput");
btnEl.addEventListener("click", () => {
    const leftInputValue = leftSwapInputEl.value;
    const rightInputValue = rightSwapInputEl.value;
    leftSwapInputEl.value = rightInputValue;
    rightSwapInputEl.value = leftInputValue;
})
//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const passwordButtonEl = document.querySelector("#passwordButton");
const passwordInputEl = document.querySelector("#passwordInput");
passwordButtonEl.addEventListener("click", event => {
    if (passwordInputEl.type === "text") {
        passwordButtonEl.textContent = "Розкрити";
        passwordInputEl.type = "password";
    } else {
        passwordButtonEl.textContent = "Приховати";
        passwordInputEl.type = "text";
    }
});
//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
const decreaseBtnEl = document.querySelector("#decrease")
const increaseBtnEl = document.querySelector("#increase")
const boxEl = document.querySelector("#box")
decreaseBtnEl.addEventListener("click", () => {
    const size = parseInt(getComputedStyle(boxEl).width)
    boxEl.style.width = size - 10 + "px"
    boxEl.style.height = size - 10 + "px"
    
})
increaseBtnEl.addEventListener("click", () => {
    const size = parseInt(getComputedStyle(boxEl).width)
    boxEl.style.width = size + 10 + "px"
    boxEl.style.height = size + 10 + "px" 
 
})

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/
addEventListener("click", (event) => {
 if (event.target.id === "place") {
    console.log("OK");
 }
})

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
const listItems = document.querySelectorAll(".listItem");
const doubleEl = document.querySelector("#double");
doubleEl.addEventListener("click", (event) => {
  listItems.forEach((item) => {
    item.textContent = BigInt(item.textContent) ** 2n;
  });
});
//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
