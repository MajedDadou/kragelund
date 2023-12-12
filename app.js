// navigation menu toggle
function show() {
  document.getElementById('sidebar').classList.toggle('active');
}




document.addEventListener('scroll', function () {
  var nav = document.getElementById('upper-nav');
  var visibleSection = null;

  for (var i = 1; i <= 5; i++) {
    var sectionId = 'section' + i;
    var section = document.getElementById(sectionId);

    if (section) {
      var rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > window.innerHeight) {
        visibleSection = section;

        // Reset the color of all watch elements
        for (var j = 1; j <= 5; j++) {
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

  if (visibleSection) {
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



