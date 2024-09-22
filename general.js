//Loader
document.addEventListener("DOMContentLoaded", () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
    hideLoader();
    showContent();
  }, 4000); // Replace with your actual data loading logic and time

  function hideLoader() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  }

  function showContent() {
    const content = document.getElementById("content");
    content.style.display = "block";
  }
});
//#Loader

//sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
//#sidebar

// greeting visitors
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet =
    "Good Morning! Hope you woke up strong. Today shall be nice to you 😊.";
else if (hrs >= 12 && hrs <= 17)
  greet =
    "Good Afternoon! How has your day been. Try our Noodles for Lunch 😉.";
else if (hrs >= 17 && hrs <= 24)
  greet =
    "Good Evening! Hope your day was not hectic. Try our Noodles for Dinner 😀. ";

document.getElementById("greetings").innerHTML = "<b>" + greet + "</b>";
// #greeting visitors

//slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 9000);
}
//#slideshow

//services, products, order
function openSection(evt, sectionTitle) {
  var i, x, tablinks;
  x = document.getElementsByClassName("section");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(sectionTitle).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}
//#services, products, order

// phone number
document.getElementById("order").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const phoneInput = document.getElementById("phone").value;
  const errorMessage = document.getElementById("errorMessage");

  // Regex for validating Nigerian phone number
  const nigeriaPhoneRegex = /^0[789]0\d{8}$/;

  if (nigeriaPhoneRegex.test(phoneInput)) {
    errorMessage.style.display = "none";
    this.submit();
    // You can proceed with form submission or further processing here
  } else {
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
  }
});
// #phone number

// not allowing negative number for egg
const egg_number = document.getElementById("egg_number");
const egg_errorMessage = document.getElementById("egg_errorMessage");

egg_number.addEventListener("input", function () {
  // Check if the input value is negative
  if (this.value < 0) {
    this.value = ""; // Clear the input
    egg_errorMessage.style.display = "block"; // Show error message
  } else {
    egg_errorMessage.style.display = "none"; // Hide error message
  }
});
// #not allowing negative number for egg

// not allowing negative number for fish
const fish_number = document.getElementById("fish_number");
const fish_errorMessage = document.getElementById("fish_errorMessage");

fish_number.addEventListener("input", function () {
  // Check if the input value is negative
  if (this.value < 0) {
    this.value = ""; // Clear the input
    fish_errorMessage.style.display = "block"; // Show error message
  } else {
    fish_errorMessage.style.display = "none"; // Hide error message
  }
});
// #not allowing negative number for fish

// not allowing negative number in the extra input
const extraInput = document.getElementById("extra");
const extra_errorMessage = document.getElementById("extra_errorMessage");

extraInput.addEventListener("input", function () {
  // Regular expression to match negative numbers
  const negativeNumberPattern = /-\d+/g;

  // Check for negative numbers in the input
  if (negativeNumberPattern.test(this.value)) {
    // Remove negative numbers from the input value
    this.value = this.value.replace(negativeNumberPattern, "");
    extra_errorMessage.style.display = "inline"; // Show error message
  } else {
    extra_errorMessage.style.display = "none"; // Hide error message
  }
});
// #not allowing negative number in the extra input

// not allowing negative number in the location input
const locationInput = document.getElementById("location");
const location_errorMessage = document.getElementById("location_errorMessage");

locationInput.addEventListener("input", function () {
  // Regular expression to match negative numbers
  const negativeNumberPattern = /-\d+/g;

  // Check for negative numbers in the input
  if (negativeNumberPattern.test(this.value)) {
    // Remove negative numbers from the input value
    this.value = this.value.replace(negativeNumberPattern, "");
    location_errorMessage.style.display = "inline"; // Show error message
  } else {
    location_errorMessage.style.display = "none"; // Hide error message
  }
});
// #not allowing negative number in the location input
