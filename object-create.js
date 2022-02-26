// 1. using Object literal 
const student = { name: 'shakil al hasan', job: 'crickter' };
// 2. constructor 
const person = new Object();

// 3. 
// const humman = Object.create(null);
const humman = Object.create(student);
// console.log(humman.job);

// 4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 22);
console.log(peop);

// 5. function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);