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
function list1(text){
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
}
list1('Hi!')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text,n) {
    document.write(`<ul>`);
    for (let i=0;i<n;i++){
        document.write(`<li>${text}</li> `) ;
    }
}
list2('OWU',5)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function list3(arr) {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}
let arr7 = [0,'Hi',true, -10];
list3(arr7);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function display(obj) {
    for (let i = 0; i < obj.length; i++) {
        document.write(
            `<div><p>ID: ${obj[i].id} </p><br>` +
            `<p>Name: ${obj[i].name} </p><br>` +
            `<p>Age: ${obj[i].age} </p><br></div>`
        );
    }
}

let users = [
    { id: 1, name: 'Maria', age: 20 },
    { id: 2, name: 'Ivan', age: 55 },
    { id: 3, name: 'Nadia', age: 105 }
];

display(users)


//- створити функцію яка повертає найменьше число з масиву
function min(arr) {
    let minn = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minn) {
            minn = arr[i];
        }
    }
    return minn;
}

let arr4 = [3, -6, 0, 5, 20];
let minNumber = min(arr4);
console.log(`Мінімальне число масиву ${arr4} є ${minNumber}`);

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum+arr[i];
    }
    return sum;
}
let arr5=[5,8,-30,60,6]
let Summa=sum(arr5);
console.log(`Сума елементів масиву ${arr5} це: ${Summa}`);

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2) {
    let temporary = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temporary;
    return arr;
}

let arr6 = [3, 6, 7, 8, 2];
let swap1 = swap(arr6, 2, 3);
console.log(`Масив ${arr6} з поміняними місцями за індексами 2 та 4: ${swap1}`);



//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }
    let sumInCurrency;
    sumInCurrency = sumUAH / exchangeRate;
    return sumInCurrency;
}
let result = exchange(5000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(`Сума в обраній валюті: ${result}`);
