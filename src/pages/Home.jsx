import Navbar from "../components/Navbar";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
/* eslint-disable react/no-unescaped-entities */
import MainTitle from "../components/MainTitle"

const Home = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const title = "Hi, I'm kévin";
  const secondTitle = "A Developer.";

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#E6B82A",
        },
      },
      fpsLimit: 60,
  particles: {
    number: {
      value: 200,
      limit: 300,
      density: {
        enable: true,
        value_area: 800
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
        nb_sides: 5
      },
      image: {
        src: "images/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.5,
        sync: false
      }
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 10,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
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
        enable: true,
        mode: "bubble",
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
        lineLinked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 1,
        speed: 2
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
    }),
    [],
  );

  if (init) {
    return (
        <>
        <Particles
          className="max-h-screen"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <header className="fixed w-full px-6 z-50">
        <Navbar />
        </header>
        <main className="relative">
        <MainTitle title={title} secondTitle={secondTitle} />
        <div className="wrapper pb-8 xl:text-lg xl:pb-12 xl:mt-12">
            <p className="text-center">Je suis un développeur passionée par la création de site dynamique, moderne, accéssible basé sur l'éxpérience de l'utilisateur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure assumenda doloremque, modi blanditiis recusandae voluptatibus esse suscipit optio natus error nisi, eius ipsa ullam rerum impedit explicabo! Explicabo, quas.</p>
        </div>
        </main>
        </>

    );
  }

  return <>
  </>;
};

export default Home