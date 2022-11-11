window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var intro = document.getElementById("intro");
var pgcontent = document.getElementById("page-content");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    intro.classList.add("intro-sticky");
    pgcontent.classList.add("page-content-sticky");
  } else {
    header.classList.remove("sticky");
    intro.classList.remove("intro-sticky");
    pgcontent.classList.remove("page-content-sticky");
  }
}