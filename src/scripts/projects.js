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

// Alert Animation
var playButtons = document.getElementsByClassName("playButton");

for (i = 0; i < playButtons.length; i++) {
  // Add event listeners for all play buttons
  playButtons[i].addEventListener("click", showAlert);
}

function showAlert() {
  var alertElement = document.getElementById("comingSoonAlert");
  alertElement.classList.remove("d-none");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.getElementById("closeButton").addEventListener("click", hideAlert);
function hideAlert() {
  var alertElement = document.getElementById("comingSoonAlert");
  alertElement.classList.add("d-none");
}
