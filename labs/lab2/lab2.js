// Question 1
const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
};
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Question 2
const capitalize = ([first, ...rest]) =>
    `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Question 3
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);

// Question 4
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value < 20);
console.log(filterLessThan20);

// Question 5
var array = [1, 2, 3, 4, 5];
const calculateSum = array.reduce((acc, num) => acc + num, 0);
const calculateProduct = array.reduce((acc, num) => acc * num, 1);

console.log(`Sum: ${calculateSum}`);
console.log(`Product: ${calculateProduct}`);

// Question 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Car Model: ${this.model}, Year: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year); // Call Car constructor
        this.balance = balance;
    }

    info() {
        return `Sedan Model: ${this.model}, Year: ${this.year}, Balance: ${this.balance}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());



