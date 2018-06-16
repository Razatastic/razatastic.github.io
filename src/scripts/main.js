// Loads Feather Icons
feather.replace();

// Particles.js Configuration
window.onload = function () {
    Particles.init({
        selector: '.background',
        color: '#aaaaff',
        connectParticles: 'true',
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 60
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 30
                }
            }, {
                breakpoint: 320,
                options: {
                    maxParticles: 0
                }
            }
        ]
    });
};