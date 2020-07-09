// Promise
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success"); // the parameter is considered as a new function and it's automatically returned
  } else {
    reject("failed");  // the parameter is considered as a new function and it's automatically returned
  }
});

// Anything in then will work only for resolve
// For catch it will work for reject

p.then((message) => {
  console.log("This is in the then ", message);
}).catch((message) => {
  console.log("This is in the catch ", message);
});

