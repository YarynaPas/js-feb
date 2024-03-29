// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
function submitF1() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let d1 = document.createElement('div');
    d1.style.height='30px';
    d1.style.margin = '10px';
    d1.style.background='lightblue';
    d1.innerText = `Name: ${name} Surname: ${surname} Age: ${age }`;
    document.body.append(d1);
    document.getElementById("Form1").reset();
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// Отримуємо блок, де знаходиться цифра
let d2 = document.createElement('div');
d2.style.height = '50px';
d2.style.background = 'lightgreen';
let i = parseInt(localStorage.getItem('counter')) || 1;
localStorage.setItem('counter', i);
d2.innerText = `Counter: ${i}`;
document.body.append(d2);
window.onload = function() {
    i++;
    d2.innerText = `Counter: ${i}`;
    localStorage.setItem('counter', i);
};


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push({ value: i });
}
localStorage.setItem('arr', JSON.stringify(arr));
let storedArr = JSON.parse(localStorage.getItem('arr'));
let indexStart = 0;
let indexEnd = 10;
let step = 10;
function display(start, end) {
    for (let i = start; i < end; i++) {
        let div = document.createElement('div');
        div.innerText = storedArr[i].value;
        document.body.appendChild(div);
    }
}
window.onload = function() {
    display(indexStart, indexEnd);
};
let next = document.createElement('button');
next.innerText = 'Next';
next.onclick = function() {
        indexStart += step;
        indexEnd += step;
        display(indexStart, indexEnd);
};
document.body.appendChild(next);
let prev = document.createElement('button');
prev.innerText = 'Previous';
prev.onclick = function() {
        indexStart -= step;
        indexEnd -= step;
        display(indexStart, indexEnd);
};
document.body.appendChild(prev);
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
function Clear() {
    let text = document.getElementById('text')
    text.style.visibility = 'hidden';
}
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користf
function Check() {
    let age = document.getElementById("age1").value;
    if (age<18){
        prompt("вік недостатній")
    }
}
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається