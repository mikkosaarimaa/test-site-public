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
