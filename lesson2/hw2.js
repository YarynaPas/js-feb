//1.Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

//--------------------------1.1-------------------------------------
let arr;
arr=[1 , 'owu' , true, 'hw2', 122, false , '$' ,3.14 ,'js' , -134];
console.log(arr);
//--------------------------1.2-------------------------------------
let books1;
books1=[
    {title:'Silence Of The Lambs', pageCount: 224, genre: 'horror novel'},
    {title:'Hannibal', pageCount: 526, genre: 'horror novel'},
    {title:'Red Dragon', pageCount: 398, genre: 'horror novel' }
];
//--------------------------1.3-------------------------------------
let books2;
books2=[
    {
        title: 'Wuthering Heights', pageCount: 320, genre: 'novel', authors: [
            {name: 'Emilie', age: 33},
            {name: 'Bronte', age: 44}
        ]
    },
    {
        title:'The Devils Advocate', pageCount: 423, genre: 'horror', authors: [
            {name: 'Andrew', age: 70},
            {name: 'Neiderman', age:76}
        ]
    },
    {
        title: 'The Wither', pageCount: 524, genre: 'fantasy', authors: [
            {name: 'Andrzej', age: 43},
            {name: 'Sapkowski',age: 51}
        ]
    }
];
//--------------------------1.4-------------------------------------
let users;
users = [
    { name: 'Іван', username: 'ivan1', password: 'gjk123' },
    { name: 'Марія', username: 'maria2', password: '$^&y456' },
    { name: 'Петро', username: 'petro3', password: 'pass789' },
    { name: 'Надія', username: 'nadia4', password: 'password123' },
    { name: 'Катерина', username: 'katya5', password: 'name@surname1' },
    { name: 'Владислав', username: 'vlad6', password: 'vlad1234' },
    { name: 'Юрій', username: 'yuriy7', password: 'red1blue2' },
    { name: 'Назарій', username: 'nazar8', password: '01071998n' },
    { name: 'Діана', username: 'diana9', password: 'queen123' },
    { name: 'Юлія', username: 'yulia10', password: 'my.password1' }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);





//Логічні розгалуження:
 //   - Є змінна х, якій ви надаєте довільне числове значення.
  //  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
   // - Користувач вводить або має два числа.
        //Потрібно знайти та вивести максимальне число з тих двох .
        //Також потрібно врахувати коли введені рівні числа.
//--------------------------2.1-------------------------------------
let x=2;
if (x !== 0) {
    document.write('<h2>Вірно</h2>');
} else {
    document.write('<h2>Невірно</h2>');
}
//--------------------------2.2-------------------------------------
let a=1;
if (a !== 0) {
    document.write('<h2>Вірно</h2>');
} else {
    document.write('<h2>Невірно</h2>');
}
let b=0;
if (b!== 0) {
    document.write('<h2>Вірно</h2>');
} else {
    document.write('<h2>Невірно</h2>');
}
let c=3;
if (c !== 0) {
    document.write('<h2>Вірно</h2>');
} else {
    document.write('<h2>Невірно</h2>');
}
//--------------------------2.2-------------------------------------
let time=21;
if (time >= 0 && time <= 14) {
    console.log('1 четверть години');
} else if (time >= 15 && time <= 29) {
    console.log('2 четверть години');
} else if (time >= 30 && time <= 44) {
    console.log('3 четверть години');
} else if (time >= 45 && time <= 59) {
    console.log('4 четверть години');
} else {
    console.log('error');
}
//--------------------------2.3-------------------------------------
let day=2;
if (day >= 1 && day <= 10) {
    console.log('1 декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('2 декада місяця');
} else if (day >= 21 && day <= 31) {
    console.log('3 декада місяця');
} else {
    console.log('error');
}
//--------------------------2.4-------------------------------------
let day1;
day1= parseInt(prompt('Введіть номер дня тижня(від 1 до 7):'));
switch (day1) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('error');
}
//--------------------------2.5-------------------------------------
let n1;
n1= parseInt(prompt('Введіть 1 число:'));
let n2;
n2= parseInt(prompt('Введіть 2 число:'));
if (n1>n2){
    console.log('Перше число є максимальним')
}else if (n1<n2){
    console.log('Друге число є максимальним')
}else if (n1===n2){
    console.log('Числа рівні')}



//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 //       за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//--------------------------3-------------------------------------
x=(prompt('Input x(can be any type):'))
x=x||"default";
if (x === "default") {
    console.log("Значення x є 'default'");
} else {
    console.log("Значення x не є 'default'");
}

 //   - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер')
}else{
   console.log('Менше 5 місяців')
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер')
}else{
    console.log('Менше 5 місяців')
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер')
}else{
    console.log('Менше 5 місяців')
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер')
}else{
    console.log('Менше 5 місяців')
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер')
}else{
    console.log('Менше 5 місяців')
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер')
}else{
    console.log('Менше 5 місяців')
}