const { type } = require("@testing-library/user-event/dist/type");

console.log("Hello, World!");
console.log("This is an example JavaScript file.");
a = 10
var x = 10;
x = "Hello"; // This is allowed in JavaScript
console.log(x);
let y = 200;
// let y = 300; // This will cause an error
{
    let y = 20;
    x = 300
    y = 30; // This is allowed with let
    console.log(y);
}

console.log(typeof 100); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are a type of object in JavaScript)
console.log(typeof function(){}); // "function"

// Function declaration
function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // 15
console.log(typeof add); // "function"

// Function expression
add = function(a, b) {
    return a * b;
}

// Arrow function
add = (a, b) => {
    return a * b;
}

add = (a, b) => {
    a * b;
}

add = (a, b) => a * b;
x = a => a + 1
y = () => 100

// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
console.log(Student);
// "function" prototype
Student.prototype.study = function(subject) {
    console.log(`${this.name} is studying ${subject}.`);
}


console.log(typeof Student); // "function"
var s1 = new Student("Alice", 20);

//Object literal
employee = {
    name: "Bob",
    age: 30,
    "city name": "New York",
    100: "This is a number key",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

console.log(typeof employee); // "object"
employee.greet();
console.log(employee['age'])
console.log(employee['city name'])
console.log(employee[100])