// navigation menu toggle
function show() {
  document.getElementById('sidebar').classList.toggle('active');
}


document.addEventListener('scroll', function () {
  var nav = document.getElementById('upper-nav');
  var visibleSection = null;

  for (var i = 1; i <= 10; i++) {
    var sectionId = 'section' + i;
    var section = document.getElementById(sectionId);

    if (section) {
      var rect = section.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= window.innerHeight) {
        visibleSection = section;

        // Reset the color of all pic elements
        for (var j = 1; j <= 10; j++) {
          var allpicElements = document.querySelectorAll('#pic' + j);
          allpicElements.forEach(function (picElement) {
            picElement.style.color = ''; // Reset color to default
          });
        }

        // Set the color of current section's pic elements
        var picElements = document.querySelectorAll('#pic' + i);
        picElements.forEach(function (picElement) {
          picElement.style.color = '#D49824';
        });

        break; // Exit the loop if a visible section is found
      }
    }
  }

  if (visibleSection && window.scrollY > 600) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});


const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleFadeIn = () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  });
};

let throttleTimeout;

const throttleScroll = () => {
  if (!throttleTimeout) {
    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
      handleFadeIn();
    }, 20); // Adjust the delay as needed for performance
  }
};

window.addEventListener('scroll', throttleScroll);
window.addEventListener('touchmove', throttleScroll); // Listen to touch events for mobile

document.addEventListener('DOMContentLoaded', () => {
  handleFadeIn();
});

// Funktion til at folde fordele ud med mere information
function toggleInfo(button) {
  var mereInfo = button.previousElementSibling.querySelector("#mereInfo");

  // Toggle klassen "hidden" for at skifte mellem visning og skjulning af ekstra information
  mereInfo.classList.toggle("hidden");

  // Opdater teksten på knappen baseret på div-elementets tilstand
  var buttonText = mereInfo.classList.contains("hidden") ? "Læs om fordele" : "Skjul fordele";
  button.innerText = buttonText;
}



function validateCheckboxes() {
  const checkboxes = [
    document.getElementById('checkbox1').checked,
    document.getElementById('checkbox2').checked,
    document.getElementById('checkbox3').checked,
    document.getElementById('checkbox4').checked,
    document.getElementById('checkbox5').checked,
    document.getElementById('checkbox6').checked
  ];

  const checkaf = document.getElementById('checkaf');
  const atLeastOneChecked = checkboxes.some(checkbox => checkbox);

  if (!atLeastOneChecked) {
    checkaf.textContent = 'Vælg mindst én mulighed.';
  } else {
    checkaf.textContent = 'Bekræftelse er modtaget';
    document.getElementById('myModal').style.display = 'block';
  }
}

// Close the modal when the close button (×) is clicked
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('close')) {
    document.getElementById('myModal').style.display = 'none';
  }
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});





function validateDonation() {
  const beloebInput = document.getElementById('beloeb');
  const donationAmount = parseFloat(beloebInput.value.trim()); // Get the entered amount as a number

  if (!donationAmount || isNaN(donationAmount)) {
    document.getElementById('amountValidationModal').style.display = 'block'; // Show the modal for invalid amount
  } else if (donationAmount < 1) {
    alert('The amount is too little.'); // Show an alert for amounts less than 1 (modify this to fit the desired message)
  } else {
    document.getElementById('myModal').style.display = 'block';

  }
}

// Close the amount validation modal when the close button (×) is clicked
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('close-amount-validation')) {
    document.getElementById('amountValidationModal').style.display = 'none';
  }
});

// Close the amount validation modal if the user clicks outside of it
window.addEventListener('click', function (event) {
  const modal = document.getElementById('amountValidationModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});




