



// document.addEventListener('scroll', function () {
//     var nav = document.getElementById('upper-nav');
//     var visibleSection = null;

//     for (var i = 1; i <= 5; i++) {
//         var sectionId = 'section' + i;
//         var section = document.getElementById(sectionId);

//         if (section) {
//             var rect = section.getBoundingClientRect();

//             if (rect.top < window.innerHeight  && rect.bottom > window.innerHeight ) {
//                 visibleSection = section;

//                 // Reset the color of all watch elements
//                 for (var j = 1; j <= 8; j++) {
//                     var allpicElements = document.querySelectorAll('#pic' + j);
//                     allpicElements.forEach(function (picElement) {
//                         picElement.style.color = ''; // Reset color to default
//                     });
//                 }

//                 // Set the color of current section's watch elements
//                 var picElements = document.querySelectorAll('#pic' + i);
//                 picElements.forEach(function (picElement) {
//                     picElement.style.color = 'red';
//                 });

//                 break; // Exit the loop if a visible section is found
//             }
//         }
//     }

//     if (visibleSection) {
//         nav.style.display = 'block';
//     } else {
//         nav.style.display = 'none';
//     }
// });
