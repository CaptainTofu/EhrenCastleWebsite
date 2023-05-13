// Define a function that logs a message to the console
function logMessage() {
    console.log("Hello from scripts.js!");
  }
  
  // Call the function when the page loads
  window.onload = logMessage;
  
  // Get the "View Portfolio" button and add an event listener
  var portfolioButton = document.querySelector(".cta");
  portfolioButton.addEventListener("click", function() {
    alert("You clicked the 'View Portfolio' button!");
  });
  
  // Get the "Contact" form and add an event listener
  var contactForm = document.querySelector("#contact-form");
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert("Thanks for contacting us! We'll get back to you soon.");
  });
  
  function openModal(title, description) {
      var modal = document.getElementById("modal");
      var modalTitle = document.getElementById("modal-title");
      var modalDescription = document.getElementById("modal-description");

      modal.style.display = "block";
      modalTitle.textContent = title;
      modalDescription.textContent = description;
    }

    function closeModal() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    }