
var navLinks = document.getElementById("navLinks");
function showMenu(){
   navLinks.style.right = "0"
}
function hideMenu(){
   navLinks.style.right = "-200px"
}
  
var loader = document.getElementById("preloader");

  window.addEventListener("load", function(){
     loader.style.display = "none";
  })