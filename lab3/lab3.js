class Sphere {
    constructor(radius) {
        this.radius = radius;
    }
    info(){
        console.log(`Радіус цієї кулі: ${this.radius}`);
    }
    Diameter(){
        let d= this.radius * 2;
        console.log(`Діаметр кулі: ${d}`);
    }
    Area(){
        let area = 4 * Math.PI * Math.pow(this.radius, 2);
        console.log(`Площа поверхні кулі: ${area}`);
    }
    Lkola(){
        let lkola = 2 * Math.PI * this.radius;
        console.log(`Довжина кола: ${lkola}`);
    }
    Volume(){
        let volume = (4/3) * Math.PI * Math.pow(this.radius, 3);
        console.log(`Об'єм кулі: ${volume}`);
    }
}

let sphere1 = new Sphere(5);
let sphere2 = new Sphere(10);
let sphere3 = new Sphere(15);


console.log("Інформація для кулі з радіусом 5:");
sphere1.info();
sphere1.Diameter();
sphere1.Area();
sphere1.Lkola();
sphere1.Volume();

console.log("Інформація для кулі з радіусом 10:");
sphere2.info();
sphere2.Diameter();
sphere2.Area();
sphere2.Lkola();
sphere2.Volume();

console.log("Інформація для кулі з радіусом 15:");
sphere3.info();
sphere3.Diameter();
sphere3.Area();
sphere3.Lkola();
sphere3.Volume();
