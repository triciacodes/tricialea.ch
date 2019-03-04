// - - - - - - - - - - - - - - - - - - - - - - - - FADE NAV MENU ON SCROLL

// when user scrolls to just above the footer, 
// add css animation to fade out nav
// when user scrolls back up page, fade nav back in

function fadeNav() {
  var navItems = Array(...document.querySelectorAll(".js-fade-nav"))
  var footer = document.querySelector('.js-footer')

  var scrollHeight = window.scrollY + window.innerHeight
  var topOfFooter = document.body.offsetHeight - footer.offsetHeight

  if (scrollHeight > topOfFooter) {
    navItems.forEach(item => {
      item.classList.add('fade-out')
      item.classList.remove('fade-in')
    })
  } else if (scrollHeight < topOfFooter) {
    navItems.forEach(item => {
      if (item.classList.contains('fade-out')) {
        item.classList.remove('fade-out')
        item.classList.add('fade-in')
      }
    })
  }
}

window.addEventListener('scroll', fadeNav)


