import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NET from "vanta/dist/vanta.net.min";

const Events = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const bgRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: bgRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fffe8,
          backgroundColor: 0x22,
          maxDistance: 29.0,
          spacing: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      className="z-0 absolute left-0 top-0 w-full flex flex-col h-full"
      ref={bgRef}
    >
      <header className="z-2">
        <Header active="events" />
      </header>
      <main></main>
      <footer className="absolute w-full z-2 bg-white bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Events;
