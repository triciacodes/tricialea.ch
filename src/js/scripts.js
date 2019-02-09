// - - - - - - - - - - - - - - - - - - - - - - - - HIDE NAV MENU ON SCROLL

// when user scrolls to just above the footer, 
// add a css animation to fade out (js-fade-out)
// when user scrolls back up page, remove js-fade-out
// and add js-fade-in class

function hideNav() {
  var nav = document.querySelectorAll("#nav-links, #c-social--nav");
  var footer = document.getElementById('c-footer');

  var scrollHeight = window.scrollY + window.innerHeight;
  var topOfFooter = document.body.offsetHeight - footer.offsetHeight;

  if (scrollHeight > topOfFooter) {
    for (i = 0; i < nav.length; i++) {
      nav[i].classList.add('js-fade-out');
      nav[i].classList.remove('js-fade-in');
    }
  } else if (scrollHeight < topOfFooter) {
    for (i = 0; i < nav.length; i++) {
      if (nav[i].classList.contains('js-fade-out')) {
        nav[i].classList.remove('js-fade-out');
        nav[i].classList.add('js-fade-in');
      }
    }
  }
};

window.addEventListener('scroll', hideNav);


