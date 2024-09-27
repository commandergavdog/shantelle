document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.container > div');
  const nextTriggers = document.querySelectorAll('.next-trigger');
  const rotateTrigger = document.querySelector('.fa-arrows-rotate');

  let currentSlide = 0;

  // Event listener for next-trigger (slide transitions)
  nextTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
          // Right layer transition code
          var rightLayers = document.querySelectorAll('.right-layer');
          rightLayers.forEach(layer => {
              layer.classList.toggle('active');
          });

          // Fade out the current slide
          slides[currentSlide].classList.remove('slide-current');

          // Slide transition with delay
          setTimeout(() => {
              slides[currentSlide].classList.add('hidden');              

              currentSlide = (currentSlide + 1) % slides.length;

              slides[currentSlide].classList.remove('hidden');
              setTimeout(() => {
                  slides[currentSlide].classList.add('slide-current');
              }, 10);
          }, 900); // Adjust the timing as needed
      });
  });

  // Event listener for fa-arrows-rotate (return to first slide with bottom-layer transition)
  if (rotateTrigger) {
      rotateTrigger.addEventListener('click', () => {
          // Bottom layer transition code
          var bottomLayers = document.querySelectorAll('.bottom-layer');
          bottomLayers.forEach(layer => {
              layer.classList.toggle('active');
          });

          // Wait for the bottom-layer transition to complete before resetting to the first slide
          setTimeout(() => {
              // Hide the current slide
              slides[currentSlide].classList.add('hidden');
              slides[currentSlide].classList.remove('slide-current');

              // Reset to the first slide
              currentSlide = 0;
              slides[currentSlide].classList.remove('hidden');
              setTimeout(() => {
                  slides[currentSlide].classList.add('slide-current');
              }, 10);
          }, 700); // Delay should match the transition duration of the bottom-layer
      });
  }
});


