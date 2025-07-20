import React, { useState } from "react";

const Home = () => {
  const [shine, setShine] = useState(false);

  // Trigger shine animation on hover
  const handleMouseEnter = () => {
    setShine(false); // Reset
    setTimeout(() => setShine(true), 50); // Trigger
  };

  const handleMouseLeave = () => {
    setShine(false);
  };

  return (
    <section
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Bottom video background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          src="/youtube-video-uljhpp4wy68-2160-ytshorts.savetube.me.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Smear animation overlay */}
        {shine && (
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="shine-smear" />
          </div>
        )}
      </div>

      {/* Image overlay */}
      <img
        src="/Untitled-1 copy.png"
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Top noise/overlay video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-20 mix-blend-screen pointer-events-none"
        src="/youtube-video-jgwyhzvdqa0-1080-ytshorts.savetube.me.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

     {shine && (
  <>
    {/* Top row: left, center, right */}
    <div className="absolute top-80 left-0 w-full flex justify-center items-center px-14 z-30 pointer-events-none">
      <span className="text-white text-lg blur-in-up">©2025</span>
    </div>

    {/* Bottom left */}
    <div className="absolute bottom-52 left-48 gap-7 z-30 pointer-events-none">
      <span className="text-white text-3xl fade-in-scale">
        Kutu&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-pointer"></i>&nbsp;&nbsp; Binit Ghosh
      </span>
    </div>

    {/* Bottom right with line */}
    <div className="absolute bottom-52 right-80 flex items-center z-30 pointer-events-none">
      <span
        className="inline-block bg-white fade-in-right"
        style={{ height: "1px", width: "280px", marginRight: "12px" }}
      />
      <span className="text-white text-3xl fade-in-right">Designer & Developer</span>
    </div>
  </>
)}
    </section>
  );
};

export default Home;