const snowThree = {
    background: {
        image: "url('https://images.pexels.com/photos/1146642/pexels-photo-1146642.jpeg')",
        position: "fixed",
        repeat: "no-repeat",
        size: "cover",
      },
    particles: {
      color: { value: "#fff" },
      move: {
        direction: "bottom",
        enable: true,
        outModes: "out",
        speed: 2
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 400
      },
      opacity: {
        value: 0.7
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 10
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: 10
      },
      zIndex: {
        value: { min: 0, max: 100 }
      }
    }
    
  }

export default snowThree