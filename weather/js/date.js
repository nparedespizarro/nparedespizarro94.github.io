let current = new Date()

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

let last = document.lastModified;
let day = current.getDay();
let month = current.getMonth();
let year = current.getFullYear();


let str = days[day] + ", "+ day + " " + months[month] + " " + year
// shows when document was last modified
document.getElementById("lastUpdated").textContent = str;

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