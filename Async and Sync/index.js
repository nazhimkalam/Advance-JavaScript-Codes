// // Synchronous
// let a = 1;
// let b = 2;
// let func = () => console.log("This is a function");

// console.log(a);
// console.log(b);
// func();
// // Output is in the same order

// // Asynchronous
// let a = 1;
// let b = 2;

// setTimeout(() => console.log("This is my async Function"), 1000); // this is by default a async

// console.log(a);
// console.log(b);

// fetch("/index.html").then(
//     console.log("The fetch() method has fetched the index.html page")
//   );

// // Notice the output is not in the same order due to async code (setTimeout)
