'use strict';



const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}




const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);





const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');


const loginLink = document.querySelector('a[href="#loginModal"]');
const signupLink = document.querySelector('a[href="#signupModal"]');
const loginLinkInSignup = document.getElementById('login-link');
const signupLinkInLogin = document.getElementById('signup-link');


const closeButtons = document.querySelectorAll('.close');


let isLoggedIn = false;


function handleLogin(event) {
  event.preventDefault(); 

  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  
  if (username === 'admin' && password === 'password') {
    isLoggedIn = true;
    loginModal.style.display = 'none'; 
    showMainContent();
  } else {
    
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Invalid username or password';
    errorMessage.style.color = 'red';
    const loginForm = document.getElementById('loginForm');
    loginForm.appendChild(errorMessage);

    
    setTimeout(() => {
      loginForm.removeChild(errorMessage);
    }, 3000);
  }
}


function showMainContent() {
 
  const mainContent = document.getElementById('main-content');

 
  mainContent.style.display = 'block';
}


loginLink.addEventListener('click', () => {
  loginModal.style.display = 'block';
});


signupLink.addEventListener('click', () => {
  signupModal.style.display = 'block';
});


loginLinkInSignup.addEventListener('click', () => {
  signupModal.style.display = 'none';
  loginModal.style.display = 'block';
});

signupLinkInLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
  signupModal.style.display = 'block';
});


closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  });
});


window.addEventListener('click', event => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  }
});


const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin);


window.addEventListener('load', () => {
  
  if (!isLoggedIn) {
    loginModal.style.display = 'block';
  } else {
  
    showMainContent();
  }
});