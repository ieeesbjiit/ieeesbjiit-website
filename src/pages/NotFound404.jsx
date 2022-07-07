import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NET from "vanta/dist/vanta.net.min";

const NotFound404 = () => {
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
      ref={bgRef}
      className="z-0 absolute left-0 top-0 w-full flex flex-col h-full"
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-white text-5xl">404 - Not Found</h2>
        {/* <Link to='/' className="text-green-500 text-center underline">Home</Link> */}
      </div>
      <div className="absolute top-[58%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {/* <h2 className="text-white text-5xl">404 - Not Found</h2> */}
        <Link to='/' className="text-green-500 text-xl text-center underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound404;
