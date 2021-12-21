function getInputValues() {
    var username = document.getElementById("username").value;
    localStorage.setItem("localUser", JSON.stringify(username));
  }