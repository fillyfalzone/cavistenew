document.addEventListener("DOMContentLoaded", function() {
  particlesJS("snowfall", {
      "particles": {
          "number": {
              "value": 50,  // Réduit pour de meilleures performances
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 5,
              "random": true
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "bottom",
              "straight": false
          },
          "line_linked": {
              "enable": false
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": false
              }
          }
      }
  });
});