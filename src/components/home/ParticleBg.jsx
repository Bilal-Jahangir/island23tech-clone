// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBg = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    const options = {
    // Full screen configuration ensures the canvas covers the entire viewport.
    fullScreen: {
      enable: false,
      zIndex: -1, // Use a negative z-index to place it behind other content.
    },
    // Background color for the canvas.
    background: {
      color: {
        value: '#000222', // Dark color to make the particles stand out.
      },
    },
    // Particle configuration.
    particles: {
      number: {
        value: 100, // Number of particles. Adjust this for density.
        density: {
          enable: true,
          value_area: 800, // The area where particles are generated.
        },
      },
      color: {
        value: '#ffffff', // Particle color.
      },
      shape: {
        type: 'circle', // Particle shape (e.g., "circle", "star", "edge").
      },
      opacity: {
        value: 0.5, // Base opacity of the particles.
        random: true, // Randomize the opacity for a more natural look.
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4, // Base size of the particles.
        random: true,
        anim: {
          enable: false,
          speed: 100,
          size_min: 0.1,
          sync: false,
        },
      },
      // Configuration for the lines that connect particles.
      links: {
        enable: true, // Enable lines.
        distance: 150, // Max distance for a line to be drawn between two particles.
        color: '#ffffff', // Line color.
        opacity: 0.4, // Line opacity.
        width: 1, // Line width.
      },
      // Particle movement behavior.
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    // Interactivity settings for mouse and click events.
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: 'repulse', // "grab" or "repulse" are great options.
        },
        onClick: {
          enable: true,
          mode: 'push', // "push" or "remove" particles on click.
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // The distance the particles will be pushed away from the mouse.
          duration: 0.4,
        },
      },
    },
    detectRetina: true,
  };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            className="absolute top-0 left-0 w-full h-full"
        />
    );
};

export default ParticleBg;