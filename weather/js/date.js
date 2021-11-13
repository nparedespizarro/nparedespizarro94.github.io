let options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

// shows when document was last modified
document.getElementById("lastUpdated").textContent = document.lastModified;

// shows current year for copyright
document.getElementById("currentYear").textContent = new Date().getFullYear();


// responsive navigation
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu')


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */