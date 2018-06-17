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
          maxParticles: 0
        }
      }
    ]
  });
};

// Social Icons animation
setTimeout(function() {
  document.getElementById("greeting_icons").style.visibility = "visible";
  $("#greeting_icons").addClass("animated lightSpeedIn");
}, 1800);
