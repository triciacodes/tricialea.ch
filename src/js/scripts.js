// - - - - - - - - - - - - - - - - - - - - - - - - FADE NAV MENU ON SCROLL

// when user scrolls to just above the footer, 
// add css animation to fade out nav
// when user scrolls back up page, fade nav back in

const navItems = Array(...document.querySelectorAll('.js-fade-nav'))
const footer = document.querySelector('.js-footer')

const fadeOut = items => {
  items.forEach(item => {
    item.classList.add('fade-out')
    item.classList.remove('fade-in')
  })
}

const fadeIn = items => {
  items.forEach(item => {
    if (item.classList.contains('fade-out')) {
      item.classList.remove('fade-out')
      item.classList.add('fade-in')
    }
  })
}

const checkScrollHeight = () => {
  let scrollHeight = window.scrollY + window.innerHeight
  let topOfFooter = document.body.offsetHeight - footer.offsetHeight
  if (scrollHeight > topOfFooter) {
    fadeOut(navItems)
  } else {
    fadeIn(navItems)
  }
}

window.addEventListener('scroll', checkScrollHeight)