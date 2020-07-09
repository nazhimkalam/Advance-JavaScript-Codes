function makeRequest(location) {
  return new Promise((resolve, reject) => {
    // promises under goes call backs in here because inside promise function we have another function taking parameters of (resolve, reject) NOTE: the resolve and reject parameters are functions
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("Google")               // this is using promises to handle data
//   .then((response) => {
//     console.log("Response Received");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork() {
  try {
    const response = await makeRequest("Google");  //if you change it to Facebook then it will run the catch method part 
    console.log("Response Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err){
    console.log(err)
  }
}
doWork()
