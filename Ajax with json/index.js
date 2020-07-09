const btn = document.getElementById("btn");
btn.addEventListener("click", clicked);
const animalContainer = document.getElementById("animal-info");
let counter = 1;

function clicked() {
  const ourRequest = new XMLHttpRequest();
  let url = `https://learnwebcode.github.io/json-example/animals-${counter}.json`;
  counter++;

  ourRequest.open("GET", url);
  ourRequest.onload = () => {
    // error handling when the link for the json data is no longer available
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let myData = JSON.parse(ourRequest.responseText);
      addContent(myData);
    } else {
      console.log("No JSON data to be found");
    }
  };
  // connection time out error handling
  ourRequest.onerror = () => {
    animalContainer.innerHTML = "<h2>Internet Connection Error</h2>";
  };
  ourRequest.send();
}

function addContent(data) {
  let myHtmlContent = "";
  if (counter == 4) {
    btn.style.display = "none";
  }
  for (let i = 0; i < data.length; i++) {
    myHtmlContent += `<p>This is a ${data[i].name} of species ${data[i].species}</p>`;
  }
  animalContainer.insertAdjacentHTML("beforeend", myHtmlContent);
}
