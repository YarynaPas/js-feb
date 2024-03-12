// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

var Users = [];
let names = ['Ivan', 'Nastya', 'Diana', 'Vitalyy', 'Kateryna', 'Anna', 'Vladyslav', 'Mykhaylo', 'Dmytro','Danylo'];
let surnames = ['Creative', 'Adventurous', 'Sincere', 'Ambitious', 'Reliable', 'Charismatic', 'Compassionate', 'Resourceful', 'Independent', 'Optimistic'];
let phones = [56892, 67123, 12345, 56789, 12346, 23457, 18906, 45671, 90123, 45109];
let id1=[12,55,88,1,8,3,999,122,4,55]
for (var i = 0; i < 10; i++) {
    var id = id1[i];
    var name = names[i];
    var surname = surnames[i];
    var email = `${surname}${id}@gmail.com`;
    var phone = "+380(097)" + phones[i];
    Users.push(new User(id, name, surname, email, phone));
}
console.log(Users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
var filteredUsers = [];
for (var i = 0; i < Users.length; i++) {
    if (Users[i].id % 2 === 0) {
        filteredUsers.push(Users[i]);
    }
}
console.log(filteredUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
var filteredUsers1 = [];
const filter1 = (a,b) => {
    return a.id - b.id;
}
filteredUsers1 = Users.sort(filter1)
console.log(filteredUsers1)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client extends User{
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
var Clients = [];
let orders = [
    {order:'oranges,milk', totalPrice: 40},
    {order:'apples,juice', totalPrice: 90},
    {order:'milk,tea', totalPrice: 41},
    {order:'tomatoes', totalPrice: 112},
    {order:'meat,pizza', totalPrice: 201},
    {order:'sushi,wasabi', totalPrice: 54},
    {order:'tea,chocolate', totalPrice: 99},
    {order:'beer,fishes', totalPrice: 78},
    {order:'melon, watermelon', totalPrice: 98},
    {order:'pickles, potatoes,cheese', totalPrice: 42}
]
for (var i = 0; i < 10; i++) {
    var id = Users[i].id;
    var name = Users[i].name;
    var surname = Users[i].surname;
    var email = Users[i].email;
    var phone = Users[i].phone;
    var order = [orders[i]];
    Clients.push(new Client(id, name, surname, email, phone,order));
}
console.log(Clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const filter2 = (a, b) => {
    return a.order.length - b.order.length;
};

let sortedClients = Clients.sort(filter2);
console.log(sortedClients);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.year = year;
    this.maxSpeed= maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = null;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info= function (){
        console.log(`model - ${model}, year - ${year}, max speed - ${maxSpeed}, engine capacity - ${engineCapacity}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість тепер: ${this.maxSpeed} км/год`);
    }
    this.changeYear = function (newValue){
        this.year+=newValue;
        console.log(` Рік випуску тепер: ${this.year}`);
    }
    this.addDriver = function (driver){
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий до автомобіля`);
    }
}
let Car1 = new Car('X5', 'BMW', 2023, 250, 3000);
Car1.drive();
Car1.info();
Car1.increaseMaxSpeed(260);
Car1.changeYear(2024);
let driverInfo = {
    name: 'Vlad',
    age: 30,
    licenseNumber: 'ВС8003ВС'
}
Car1.addDriver(driverInfo);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carr {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer; // Додано виробник
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = null;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log(`Model - ${this.model}, Manufacturer - ${this.manufacturer}, Year - ${this.year}, Max Speed - ${this.maxSpeed}, Engine Capacity - ${this.engineCapacity}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість тепер: ${this.maxSpeed} км/год`);
    }
    changeYear(newValue) {
        this.year += newValue;
        console.log(`Рік випуску тепер: ${this.year}`);
    }
    addDriver(driver) {
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий до автомобіля`);
    }
}

let Car2 = new Carr('Prado', 'Toyota', 2024, 350, 3200);
Car2.drive();
Car2.info();
Car2.increaseMaxSpeed(370);
Car2.changeYear(2023);

let driverInfo1 = {
    name: 'Diana',
    age: 18,
    licenseNumber: 'ВС8005ВС'
};
Car2.addDriver(driverInfo1);

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name,age,footSize) {
        this.name = name;
        this.age=age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella('Anna', 20, 36),
    new Cinderella('Yulia', 19, 35),
    new Cinderella('Katya', 25, 37),
    new Cinderella('Diana', 20, 35.75),
    new Cinderella('Nastya', 21, 36.5),
    new Cinderella('Vicktoria', 22, 35.5),
    new Cinderella('Alina', 18, 38),
    new Cinderella('Maria', 23, 37.5),
    new Cinderella('Iryna', 21, 38.5),
    new Cinderella('Yana', 19, 36.75)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name,age,findedShoeSize) {
        this.name = name;
        this.age=age;
        this.findedShoeSize= findedShoeSize;
    }
}
let princes = [
    new Prince('Ivan', 22, 35),
    new Prince('Yura', 21, 35.5),
    new Prince('Vlad', 23, 36),
    new Prince('Vitalyy', 19, 36.5),
    new Prince('Mykola', 26, 37),
    new Prince('Max', 27, 37.5),
    new Prince('Volodya', 24, 38),
    new Prince('Oleg', 22, 38.5),
    new Prince('Mykhaylo', 20, 36.75),
    new Prince('Ruslan', 19, 35.75)
];

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let prince of princes) {
    for (let cinderella of cinderellas) {
        if (prince.findedShoeSize === cinderella.footSize) {
            console.log(`${prince.name} знаходиться з попелюшкою ${cinderella.name}`);
            break;
        }
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function findCinderella(prince) {
    return cinderellas.find(cinderella => cinderella.footSize === prince.findedShoeSize);
}
for (let prince of princes) {
    let foundCinderella = findCinderella(prince);

    if (foundCinderella) {
        console.log(`${prince.name} знаходиться з попелюшкою ${foundCinderella.name}`);
    }
}