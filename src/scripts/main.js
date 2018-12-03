// Particles.js Configuration
window.onload = function() {
  Particles.init({
    selector: ".background",
    maxParticles: 60,
    connectParticles: "true",
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 40
        }
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 20
        }
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 10
        }
      }
    ]
  });
};

// Social Icons animation
setTimeout(function() {
  document.getElementById("greeting-icons").style.visibility = "visible";
  $("#greeting-icons").addClass("animated lightSpeedIn");
}, 1500);
