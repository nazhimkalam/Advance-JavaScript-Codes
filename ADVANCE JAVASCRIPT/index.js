// functions using es6
// sayHello = (name, message = "bye") => {
//   console.log("Hello", name);
//   console.log(message);
// };
// sayHello("Nazhim");

//------------------------------------------------------------------

// 'this' keyword
// var name;
// var age;
// var Person = (name, age) => {
//   this.name = name;
//   this.age = age;
//   console.log( `${this.name} is ${this.age} years old`);
// };
// const Nazhim = Person('Nazhim',18);
// const Fatheeha = Person('Fatheeha',18);

//------------------------------------------------------------------

// using call()
// const obj = {
//   brand: "Dell",
//   ram: "8gb",
//   processor: "i9",
//   graphics: "NVIDIA Titan RTX DirectX 12.00 ",
// };
// function details() {
//   console.log(this.brand);
//   console.log(this.ram);
//   console.log(this.processor);
//   console.log(this.graphics);
// }

// details.call(obj);

//------------------------------------------------------------------

// Bind()
// let numbers = {
//   num1: 5,
//   num2: 8,
// };

// function adding() {
//   console.log(this.num1 + this.num2);
// }

// let result = adding.bind(numbers);
// result();

//------------------------------------------------------------------

// Classes

// class Student {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   displayResult() {
//     console.log(`
//       Details of the student
//       --> ${this.name}
//       --> ${this.age}
//       --> ${this.gender}
//       `);
//   }
// }

// let s1 = new Student("Nazhim", 18, "Male");
// let s2 = new Student("Fatheeha", 18, "Female");
// s1.displayResult();
// s2.displayResult();

//------------------------------------------------------------------

// Closure
// const add = function (num1) {
//   return function (num2) {
//     console.log(`
//             Total: ${num1 + num2}
//         `);
//   };
// };

// let a = add(10);
// a(15);

// let b = add(10);
// b(65);

//------------------------------------------------------------------

