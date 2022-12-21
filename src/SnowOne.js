const snowOne = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          sides: 5
        },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        animation: {
          enable: false,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 10,
        random: { enable: true, minimumValue: 5 },
        animation: {
          enable: false,
          speed: 40,
          minimumValue: 5,
          sync: false
        }
      },
      lineLinked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        collisions: true,
        enable: true,
        speed: 7,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: false,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    detectRetina: true,
    background: {
        image: "url('https://images.pexels.com/photos/1146642/pexels-photo-1146642.jpeg')",
        repeat: "no-repeat",
        size: "cover",
      }
  }

  export default snowOne