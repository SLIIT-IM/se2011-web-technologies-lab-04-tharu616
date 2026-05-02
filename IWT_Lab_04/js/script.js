/*1. WELCOME MESSAGE
   Shows a greeting when the user clicks "Say Hello"*/
function showWelcome() {
  // Find the paragraph where we will put the message
  var msg = document.getElementById("welcomeMsg");

  // Write the welcome text inside it
  msg.textContent = "👋 Welcome! We are glad you are here. Explore our products and enjoy student discounts!";
}


/*2. DISCOUNT MESSAGE
   Shows a discount notice when the user clicks "Apply Student Discount"*/
function applyDiscount() {
  // Find the paragraph for the discount message
  var msg = document.getElementById("discountMsg");

  // Show the discount text
  msg.textContent = "🎉 You received a 10% discount! Show your student ID at checkout to redeem.";
}


/*3. PRODUCT SEARCH
   Filters the product table as the user types in the search box*/
function searchProducts() {
  // Get what the user typed and convert it to lowercase for easy comparison
  var input = document.getElementById("searchBox").value.toLowerCase();

  // Get all the rows inside the table body
  var rows = document.querySelectorAll("#productBody tr");

  // Go through each row one by one
  rows.forEach(function(row) {
    // Get the text in the first cell (product name) and make it lowercase
    var productName = row.cells[0].textContent.toLowerCase();

    // If the product name contains what the user typed, show the row
    // Otherwise, hide it
    if (productName.includes(input)) {
      row.style.display = "";        // show the row
    } else {
      row.style.display = "none";    // hide the row
    }
  });
}


/*4. CONTACT FORM VALIDATION
   Checks the name, email, and message fields before submitting*/
function validateForm() {
  // Get the values from each input field (trimmed to remove extra spaces)
  var name    = document.getElementById("userName").value.trim();
  var email   = document.getElementById("userEmail").value.trim();
  var message = document.getElementById("userMessage").value.trim();

  // Get the paragraph where we show success or error messages
  var formMsg = document.getElementById("formMsg");

  // Remove any colour class from a previous attempt
  formMsg.classList.remove("error-msg");

  /*  Check: name must not be empty*/
  if (name === "") {
    formMsg.textContent = "❌ Please enter your name.";
    formMsg.classList.add("error-msg");  // show in red
    return;  // stop here, do not continue
  }

  /* Check: email must not be empty  */
  if (email === "") {
    formMsg.textContent = "❌ Please enter your email address.";
    formMsg.classList.add("error-msg");
    return;
  }

  /*Check: email must look like a real email address 
       A simple pattern: something @ something . something*/
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMsg.textContent = "❌ Please enter a valid email address (e.g. student@uni.ac.lk).";
    formMsg.classList.add("error-msg");
    return;
  }

  /* --- Check: message must not be empty --- */
  if (message === "") {
    formMsg.textContent = "❌ Please enter a message before sending.";
    formMsg.classList.add("error-msg");
    return;
  }

  /* --- All checks passed: show a thank-you message --- */
  formMsg.textContent = "✅ Thank you, " + name + "! Your message has been sent. We will get back to you soon.";

  /* --- Clear the form fields after successful submission --- */
  document.getElementById("userName").value    = "";
  document.getElementById("userEmail").value   = "";
  document.getElementById("userMessage").value = "";
}


/*5. DARK MODE TOGGLE
   Switches between light and dark themes*/
function toggleDarkMode() {
  // Get the <body> element
  var body = document.body;

  // Get the toggle button
  var btn = document.getElementById("darkModeBtn");

  // Check if dark mode is already on
  if (body.classList.contains("dark")) {
    // Dark mode is ON — switch back to light mode
    body.classList.remove("dark");
    btn.textContent = "🌙 Dark Mode";  
  } else {
    // Dark mode is OFF — turn it on
    body.classList.add("dark");
    btn.textContent = "☀️ Light Mode"; 
  }
}