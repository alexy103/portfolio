window.addEventListener('beforeunload', function() {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, behavior: 'instant' });
});

window.addEventListener('unload', function() {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, behavior: 'instant' });
});

window.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.scrollBehavior = 'smooth';
});

boutonHaut = document.getElementsByClassName("boutonHaut");

window.addEventListener("scroll", scrollFunction);

var scrollVh = window.innerHeight*0.01

function scrollFunction() {
    if(window.screen.width > 520){
        if (document.documentElement.scrollTop > scrollVh) {
            boutonHaut[0].style.display = "block";
        } else {
            boutonHaut[0].style.display = "none";
        }
    }
}

function topFunction() {
    window.scrollTo(0, 0);
}

function reveal() {
    var elements = document.querySelectorAll(".hidden");
    var disappearElements = document.querySelectorAll(".disappear");
  
    for (var i = 0; i < elements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elements[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        elements[i].classList.add("active");
  
        // masquer l'élément précédent si l'élément suivant est visible
        if (i > 0 && elements[i-1].classList.contains("active")) {
          elements[i-1].classList.remove("active");
          elements[i-1].classList.add("disappear");
        }
        // réafficher l'élément précédent si l'utilisateur a scrollé au-dessus
        if (i > 0 && elements[i-1].classList.contains("disappear") && elements[i].getBoundingClientRect().top > windowHeight * 0.25) {
          elements[i-1].classList.remove("disappear");
          elements[i-1].classList.add("active");
        }
      } else {
          elements[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);
reveal();