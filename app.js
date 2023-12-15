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

        // Reset the color of all watch elements
        for (var j = 1; j <= 10; j++) {
          var allpicElements = document.querySelectorAll('#pic' + j);
          allpicElements.forEach(function (picElement) {
            picElement.style.color = ''; // Reset color to default
          });
        }

        // Set the color of current section's watch elements
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


// Function to check if element is in the viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle fade-in effect for image cards
const handleFadeIn = () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  });
};

// Event listener for scroll event
window.addEventListener('scroll', () => {
  handleFadeIn();
});

// Initially trigger fade-in for elements in view on page load
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

/* Funktion til at check af afkrydsning
document.addEventListener('DOMContentLoaded', function() {
  // Hent checkboxer og knap
  var checkbox1 = document.getElementById('checkbox1');
  var checkbox2 = document.getElementById('checkbox2');
  var checkbox3 = document.getElementById('checkbox3');
  var submitButton = document.getElementById('submitButton');
  var resultBox = document.getElementById('resultBox');

  // Tilføj en eventlistener til hver checkbox for at opdatere knappens tilstand
  checkbox1.addEventListener('change', updateButtonState);
  checkbox2.addEventListener('change', updateButtonState);
  checkbox3.addEventListener('change', updateButtonState);

  // Funktion til at opdatere knappens tilstand
  function updateButtonState() {
    submitButton.disabled = !(checkbox1.checked || checkbox2.checked || checkbox3.checked);
  }

  // Tilføj en eventlistener til knappen for at vise boksen
  submitButton.addEventListener('click', function() {
    resultBox.style.display = 'block'; // Vis boksen
  });
});*/

function validateCheckboxes() {
  const checkbox1 = document.getElementById('checkbox1').checked;
  const checkbox2 = document.getElementById('checkbox2').checked;
  const checkbox3 = document.getElementById('checkbox3').checked;
  const checkaf = document.getElementById('checkaf');

  if (!checkbox1 && !checkbox2 && !checkbox3) {
    checkaf.textContent = 'Vælg mindst én mulighed.';
  } else {
    checkaf.textContent = 'Bekraftelse er moddtaget';
    // Additional logic or actions if at least one checkbox is checked
  }

}


// // Function to show sidebar
// function showSidebar() {
//   const sidebar = document.getElementById('sidebar');
//   sidebar.classList.remove('hidden-sidebar');
// }

// // Function to hide sidebar
// function hideSidebar() {
//   const sidebar = document.getElementById('sidebar');
//   sidebar.classList.add('hidden-sidebar');
// }

// // Function to check scroll position and trigger the sidebar visibility
// function checkScroll() {
//   const specificPoint = 800; // Change this value to the scroll position where you want the sidebar to appear
//   const sidebar = document.getElementById('sidebar');

//   if (window.scrollY >= specificPoint) {
//     showSidebar();
//   } else {
//     hideSidebar();
//   }
// }

// // Event listener to check scroll position
// window.addEventListener('scroll', checkScroll);

// // Initially, check the scroll position on page load
// document.addEventListener('DOMContentLoaded', function () {
//   checkScroll();
// });



