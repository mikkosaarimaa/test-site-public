// Smoothly move to top of page
const rootElement = document.documentElement

function scrollToTop() {
  rootElement.scrollTo({ top: 0, behavior: "smooth" })
}

// 'Move to top of page' button fades in when user scrolls down
var topBtn = document.getElementById("scrollToTopBtn")

window.onscroll = function() { scrollFunction() }

function scrollFunction() {
  if (document.body.scrollTop > 500 || rootElement.scrollTop > 500) {
    topBtn.style.opacity = "1"
  } else {
    topBtn.style.opacity = "0"
  }
}

// Toggle navigation bar dropdown menu on/off by clicking on any part of it
function toggleNav() {
  var mySidenav = document.getElementById("mySidenav");
    if (mySidenav.style.height == "0px") {
      mySidenav.style.height = "200px";
      mySidenav.style.paddingTop = "60px";
    } else {
      mySidenav.style.height = "0px";
      mySidenav.style.paddingTop = "0px";
    }
  }
  
function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
  document.getElementById("mySidenav").style.paddingTop = "0px";
}