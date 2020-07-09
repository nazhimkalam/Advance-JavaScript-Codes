// Getting the size of the window
window.addEventListener("resize", update);
let size = window.document.getElementById("demo");
function update() {
  let updatedData =
    "Browser inner width: " +
    window.innerWidth +
    "\nBrowser inner height: " +
    window.innerHeight;
  size.innerHTML = updatedData;
}
update();

var newWindow;
// opening a window
function googleTranslate() {
    newWindow = window.open("https://translate.google.com/", "googleTranslate");
}

//closing a window
function closeGoogleTranslate(){
    newWindow.close()
}


