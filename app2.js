document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-para');
  const parallax = document.querySelector('.parallax');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');

  images.forEach((image) => {
    const size = Math.floor(Math.random() * 500) + 100; // Random size between 50px and 500px

    const x = Math.random() * (parallax.offsetWidth - size); // Limit within parallax width
    const y = Math.random() * (parallax.offsetHeight - size); // Limit within parallax height

    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.width = `${size}px`;
    image.style.height = 'auto';

    image.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImage.src = image.src;
    });
  });

  // Parallax scrolling effect
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    images.forEach((image) => {
      const speed = parseFloat(image.dataset.speed) || 1; // Adjust the speed as needed

      const yPos = -(scrollY * speed);
      image.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Close the modal when clicking on the close button (×) or outside the modal content
  const closeModal = () => {
    modal.style.display = 'none';
  };

  document.querySelector('.close').addEventListener('click', closeModal);
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

});
