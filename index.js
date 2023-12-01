document.addEventListener("DOMContentLoaded", function () {
  const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
  const smallMenu = document.querySelector('.header__sm-menu');
  const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
  const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
  const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');
  const headerLogoContainer = document.querySelector('.header__logo-container');
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  hamMenuBtn.addEventListener('click', () => {
    toggleMenu();
  });

  for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
      toggleMenu();
    });
  }

  headerLogoContainer.addEventListener('click', () => {
    location.href = 'index.html';
  });

  window.onscroll = function () {
    scrollFunction();
  };

  scrollToTopBtn.addEventListener("click", function () {
    scrollToTop();
  });

  function toggleMenu() {
    smallMenu.classList.toggle('header__sm-menu--active');
    headerHamMenuBtn.classList.toggle('d-none');
    headerHamMenuCloseBtn.classList.toggle('d-none');
  }

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
});
