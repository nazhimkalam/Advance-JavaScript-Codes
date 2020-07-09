// Asynchronous is where you don't to wait till the code is done executing in order to move to the next
// Synchronous is where you wait till the code is done executing in order to move to the next

let array = ["number1", "number2", "number3"];

function get() {
  setTimeout(() => {
    let output = "";
    array.forEach((element) => {
      output += `${element}<br/>`;
    });
    document.body.innerHTML = output;
  }, 500);
}

// call backs -------------------------------

// function create(newElement, callback) {
//   setTimeout(() => {
//     array.push(newElement);
//     callback();
//   }, 1000);
// }

// create("number4", get);

// promises --------------------------------

// function create(newElement) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       array.push(newElement);

//       let errorOccurred = false;

//       if (!errorOccurred) {
//         res();
//       } else {
//         rej("Error: Something went wrong");
//       }
//     }, 100);
//   });
// }

// create("number4")
//   .then(get())
//   .catch((error) => console.log(error));

// promise all ---------------------------------------
// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((res, rej) => {
//   setTimeout(res, 2000, "Good Bye");
// });

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );

