function menuBar() {
  var menuLinks = document.getElementById("menuLinks");
  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }
}

export default menuBar;
