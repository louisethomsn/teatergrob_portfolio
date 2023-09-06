function openNav() {
  document.getElementById("mySidepanel").style.width = "400px";
  document.getElementById("blur").style.display = "block";
  // document.querySelector("body").style.backgroundColor = "#0048AE";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("blur").style.display = "none";
}

// const btn = document.querySelector(".toggle-btn");
// const nav = document.querySelector("nav");
