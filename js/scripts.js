

// - - - - - - - - - - - - - - - - - - - - - - - - SWAP IMAGES ON SMALL SCREENS


// variables for project images
// var earthquakePrepImage = document.getElementById('earthquake-prep-img');
var freshWebsiteImage = document.getElementById('fresh-website-img');
var marsImage = document.getElementById('mars-img');
var beHonestImage = document.getElementById('be-honest-img');
var fogdWebsiteImage = document.getElementById('fogd-website-img');
var creativeCodingImage = document.getElementById('creative-coding-img');
var timeTravelAppImage = document.getElementById('time-travel-app-img');

// chooses small or large version of image based on screen width
function loadImgs() {
  if (window.innerWidth <= 620) {
    // earthquakePrepImage.setAttribute("src", "img/projects/earthquake-prep-sml.jpg");
    freshWebsiteImage.setAttribute("src", "/img/projects/fresh-website-sml.jpg");
    marsImage.setAttribute("src", "/img/projects/mars-sml.jpg");
    beHonestImage.setAttribute("src", "/img/projects/be-honest-sml.jpg");
    fogdWebsiteImage.setAttribute("src", "/img/projects/fogd-website-sml.jpg");
    // creativeCodingImage.setAttribute("src", "/img/projects/creative-coding-sml.jpg");
    timeTravelAppImage.setAttribute("src", "/img/projects/time-travel-app-sml.jpg");
  } else {
    // earthquakePrepImage.setAttribute("src", "img/projects/earthquake-prep.jpg");
    freshWebsiteImage.setAttribute("src", "/img/projects/fresh-website.jpg");
    marsImage.setAttribute("src", "/img/projects/mars.jpg");
    beHonestImage.setAttribute("src", "/img/projects/be-honest.jpg");
    fogdWebsiteImage.setAttribute("src", "/img/projects/fogd-website.jpg");
    // creativeCodingImage.setAttribute("src", "/img/projects/creative-coding.jpg");
    timeTravelAppImage.setAttribute("src", "/img/projects/time-travel-app.jpg");
  }
}

window.addEventListener('load', loadImgs);

// on resize, replace w/ small or large version of image based on screen width
function resizeImg() {
  if (window.innerWidth <= 620) {
    // earthquakePrepImage.setAttribute("src", "img/projects/earthquake-prep-sml.jpg");
    freshWebsiteImage.setAttribute("src", "/img/projects/fresh-website-sml.jpg");
    marsImage.setAttribute("src", "/img/projects/mars-sml.jpg");
    beHonestImage.setAttribute("src", "/img/projects/be-honest-sml.jpg");
    fogdWebsiteImage.setAttribute("src", "/img/projects/fogd-website-sml.jpg");
    creativeCodingImage.setAttribute("src", "/img/projects/creative-coding-sml.jpg");
    timeTravelAppImage.setAttribute("src", "/img/projects/time-travel-app-sml.jpg");
  } else {
    // earthquakePrepImage.setAttribute("src", "img/projects/earthquake-prep.jpg");
    freshWebsiteImage.setAttribute("src", "/img/projects/fresh-website.jpg");
    marsImage.setAttribute("src", "/img/projects/mars.jpg");
    beHonestImage.setAttribute("src", "/img/projects/be-honest.jpg");
    fogdWebsiteImage.setAttribute("src", "/img/projects/fogd-website.jpg");
    creativeCodingImage.setAttribute("src", "/img/projects/creative-coding.jpg");
    timeTravelAppImage.setAttribute("src", "/img/projects/time-travel-app.jpg");
  }
}

window.addEventListener('resize', resizeImg);



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


