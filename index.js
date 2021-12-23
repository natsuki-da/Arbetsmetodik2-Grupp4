// Spara värden i en localStorage. Funktionen aktiveras när man trycker på Sign-in knappen
function getInputValues() {
    var username = document.getElementById("username").value;
    localStorage.setItem("localUser", JSON.stringify(username));
  }

  