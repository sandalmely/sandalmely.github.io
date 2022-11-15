window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var pgtitle = document.getElementById("page-title");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    pgtitle.classList.add("page-title-sticky");
  } else {
    header.classList.remove("sticky");
    pgtitle.classList.remove("page-title-sticky");
  }
}