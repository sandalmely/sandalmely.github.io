window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var intro = document.getElementById("intro");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    intro.classList.add("intro-sticky");
  } else {
    header.classList.remove("sticky");
    intro.classList.remove("intro-sticky");
  }
}