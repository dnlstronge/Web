unction init() {
  const testing = document.getElementById("test");
  testing.innerHTML = "Had a lousy day bird-watching, it did nothing but rain";
  testing.setAttribute("class", "redText");
  }
  window.onload = init;