// Particles.js Configuration
window.onload = function() {
    Particles.init({
      selector: ".background",
      maxParticles: 90,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 60
          }
        },
        {
          breakpoint: 425,
          options: {
            maxParticles: 30
          }
        },
        {
          breakpoint: 320,
          options: {
            maxParticles: 0
          }
        }
      ]
    });
  };