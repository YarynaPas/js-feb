//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area1(a,b) {
    return a*b;
}
a= parseInt(prompt('Введіть 1 сторону:'));
b= parseInt(prompt('Введіть 2 сторону:'));
let area = area1(a, b);
if (area>0){
    console.log(`Площа прямокутника зі сторонами ${a} та ${b} = ${area}`)
}
else {
    console.log(`Площу прямокутника зі сторонами ${a} та ${b} неможливо обрахувати`)
}
    //- створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r){
    let area = Math.PI * Math.pow(r, 2);
    area = parseFloat(area.toFixed(3));
    return area;
}
rad=parseInt(prompt('Введіть радіус кола:'));
let areaa=areaCircle(rad)
if (areaa>0){
    console.log(`Площа кола радіусом ${rad} = ${areaa}`)
}
else {
    console.log(`Площу кола радіусом ${rad} неможливо обрахувати`)
}
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h,r) {
    return 2*Math.PI*r*h;
}
h=parseInt(prompt('Введіть радіус кола:'));
r=parseInt(prompt('Введіть радіус кола:'));
let area3=cylinderArea(h,r)
if (area3>0){
    console.log(`Бічна площа поверхні циліндра радіусом ${rad} та висотою ${h} = ${area3}`)
}
else {
    console.log(`Бічну площу поверхні циліндра радіусом ${rad} та висотою ${h} неможливо обрахувати`)
}
//- створити функцію яка приймає масив та виводить кожен його елемент
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let arr = [3,6,8,0,-6];
console.log("Елементи масиву:");
printArray(arr);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(p) {
    document.write('<p>' + p + '</p>');
}
let Text = prompt("Введіть текст для нового параграфу:");
if (Text !== null && Text !== "") {
    paragraph(Text);
} else {
    alert("Ви не ввели текст. Параграф не створено.");
}

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list1(l){
    document.write('<ul>');
    document.write('</ul>');
}

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function li(list){
    document.write('<ul>');
    for (let i = 0; i < list.length; i++) {
        document.write('<li>' + listOfItems[i] + '</li>');
    }
    document.write('</ul>');
}
let list=[js, hi,6];
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250