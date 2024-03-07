//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let str1='hello world';
let str2='lorem ipsum';
let str3='javascript is cool'
let len1=str1.length;
let len2=str2.length;
let len3=str3.length;
console.log(`Довжина рядка '${str1}': ${len1}`);
console.log(`Довжина рядка '${str2}': ${len2}`);
console.log(`Довжина рядка '${str3}': ${len3}`);
// Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let stUp1=str1.toUpperCase();
let stUp2=str2.toUpperCase();
let stUp3=str3.toUpperCase();
console.log(`Великий регістр рядка '${str1}': ${stUp1}`);
console.log(`Великий регістр рядка '${str2}': ${stUp2}`);
console.log(`Великий регістр рядка '${str3}': ${stUp3}`);
//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str12='HELLO WORLD';
let str22='LOREM IPSUM';
let str32='JAVASCRIPT IS COOL';
let stLow1=str12.toLowerCase();
let stLow2=str22.toLowerCase();
let stLow3=str32.toLowerCase();
console.log(`Нижній регістр рядка '${str12}': ${stLow1}`);
console.log(`Нижній регістр рядка '${str22}': ${stLow2}`);
console.log(`Нижній регістр рядка '${str32}': ${stLow3}`);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   ';
let clean = dirty.trim();
console.log(`Очищена стрічка: '${clean}'`);

//let let;
// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    //let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = (str) => str.split(' ');
let str = 'Ревуть воли як ясла повні';
let result=stringToArray(str);
console.log(`Масив з стрічки ${str}: ${result}`)
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let string = numbers.map(String);
console.log(string);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
  //  let nums = [11,21,3];

///sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
const sortNums = (arr, direction) => {
  if (direction==='ascending'){
      arr.sort(function(a, b) {
          return a - b;
      });
  } else if (direction === 'descending') {
      // Сортування за спаданням
      arr.sort(function(a, b) {
          return b - a;
      });
  }
  return arr;
}
let direction='descending';
let nums=[11,21,3];
let sorted = sortNums(nums,direction);
console.log(`Масив ${nums} посортований за напрямком descending: ${sorted} `)
//==========================
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort(function(a, b) {
    return b.monthDuration - a.monthDuration;
});

let filter5 = coursesAndDurationArray.filter(function(course) {
    return course.monthDuration > 5;
});

console.log(coursesAndDurationArray);
console.log(filter5);

//=========================
  //  описати-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//колоду карт (від 6 до туза без джокерів)
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше
let cards=[
    {cardSuit:'spade', value: '6', color:'black'},
    {cardSuit:'spade', value: '7', color:'black'},
    {cardSuit:'spade', value: '8', color:'black'},
    {cardSuit:'spade', value: '9', color:'black'},
    {cardSuit:'spade', value: '10', color:'black'},
    {cardSuit:'spade', value: 'jack', color:'black'},
    {cardSuit:'spade', value: 'queen', color:'black'},
    {cardSuit:'spade', value: 'king', color:'black'},
    {cardSuit:'spade', value: 'ace', color:'black'},
    //----------------------------------------------
    {cardSuit:'diamond', value: '6', color:'black'},
    {cardSuit:'diamond', value: '7', color:'black'},
    {cardSuit:'diamond', value: '8', color:'black'},
    {cardSuit:'diamond', value: '9', color:'black'},
    {cardSuit:'diamond', value: '10', color:'black'},
    {cardSuit:'diamond', value: 'jack', color:'black'},
    {cardSuit:'diamond', value: 'queen', color:'black'},
    {cardSuit:'diamond', value: 'king', color:'black'},
    {cardSuit:'diamond', value: 'ace', color:'black'},
    //------------------------------------------------
    {cardSuit:'heart', value: '6', color:'red'},
    {cardSuit:'heart', value: '7', color:'red'},
    {cardSuit:'heart', value: '8', color:'red'},
    {cardSuit:'heart', value: '9', color:'red'},
    {cardSuit:'heart', value: '10', color:'red'},
    {cardSuit:'heart', value: 'jack', color:'red'},
    {cardSuit:'heart', value: 'queen', color:'red'},
    {cardSuit:'heart', value: 'king', color:'red'},
    {cardSuit:'heart', value: 'ace', color:'red'},
    //------------------------------------------------
    {cardSuit:'clubs', value: '6', color:'red'},
    {cardSuit:'clubs', value: '7', color:'red'},
    {cardSuit:'clubs', value: '8', color:'red'},
    {cardSuit:'clubs', value: '9', color:'red'},
    {cardSuit:'clubs', value: '10', color:'red'},
    {cardSuit:'clubs', value: 'jack', color:'red'},
    {cardSuit:'clubs', value: 'queen', color:'red'},
    {cardSuit:'clubs', value: 'king', color:'red'},
    {cardSuit:'heart', value: 'ace', color:'red'},
]
//{
  //  cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    //    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
   // color:'', // 'red','black'
//}

//=========================

  //  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
 //   spades:[],
  //      diamonds:[],
 //   hearts:[],
 //   clubs:[]
//}
//=========================
    //взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker