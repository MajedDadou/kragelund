document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-para');
  const parallax = document.querySelector('.parallax');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');

  images.forEach((image) => {
    const size = Math.floor(Math.random() * 500) + 50; // Random size between 50px and 500px

    const x = Math.random() * (parallax.clientWidth - size); // Limit within parallax width
    const y = Math.random() * (parallax.clientHeight - size); // Limit within parallax height

    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.width = `${size}px`;
    image.style.height = 'auto';

    image.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImage.src = image.src;
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

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    images.forEach((image) => {
      const speed = parseFloat(image.style.transform.split(' ')[1].slice(0, -3)) || 1;
      image.style.transform = `translateY(${speed * scrollY * -0.3}px)`;
    });
  });
});
