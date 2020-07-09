function loadDoc() {

    var xhttp = new XMLHttpRequest();          // WE CREATE THE XMLHttpRequest OBJECT

    xhttp.open("GET", "What is Ajax.txt", true); // opening request and sending it to the server

    xhttp.send();

    xhttp.onreadystatechange = function() {    

      if (this.readyState == 4 && this.status == 200) {   // SIGN OF STATUS READY AND AVAILABLE STATUS

       document.getElementById("demo").innerHTML = this.responseText;  // gets the SERVER response and adds to index.html

      }
    };

    
  }


//   The function requests data from a web server and displays it