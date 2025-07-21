import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Image URLs (replace with your actual image paths)
const bgImg = "/istockphoto-1421421842-2048x2048 copy.webp";
const sticker1 = "/ef7c18d5-9cca-4c68-9c62-0970cfde5084-removebg-preview.png";
const chromeSplash = "/Adobe Express - file.png";
const modelImg = "/Layer 1.png";
const sticker2 = "/d9debbd4-60c7-4067-9711-8e590a339fe1-removebg-preview.png";
const sticker3 = "/01d2d154-a5c9-4163-819e-3f917743f5f4-removebg-preview.png";
const chromeCursor = "/c9bec9d8-5df4-4cfd-865b-37a857c8cbec-removebg-preview.png";
const topLeftSticker = "/Layer 10.png";
const topRightSticker = "/3ae4e20c-3f62-4bf2-97a7-118ecf0bc699-removebg-preview.png";
const globe = "/689a8045-71c7-45d9-bdb9-1cf30ef93b14-removebg-preview.png";
const globeSticker1 = "/Layer 9.png";
const globeSticker2 = "/Layer 4.png";

const About = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const scaleParallax = useTransform(scrollY, [0, 500], [1, 1.05]);
  const springY = useSpring(yParallax, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.6);
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slideInFromBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const blurZoomOut = {
    hidden: { scale: 2, opacity: 0, filter: "blur(10px)" },
    visible: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeOut" } }
  };

  const blurFadeIn = {
    hidden: { y: 100, opacity: 0, filter: "blur(6px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } }
  };

  const characterBlur = {
    hidden: { opacity: 0, filter: "blur(15px)", y: 50 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const globeZoomBlur = {
    hidden: { scale: 0.5, opacity: 0, filter: "blur(8px)" },
    visible: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeOut" } }
  };

  const slideDownFromTop = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const textSlideRight = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const textSlideLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
  };

  const textSlideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.4 } }
  };

  const contentSlide = {
    hidden: { y: -20, opacity: 0, filter: "blur(4px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut", delay: 0.6 } }
  };

  const skillsLeft = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.8 } }
  };

  const skillsRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 1 } }
  };

  const bioAnimation = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut", delay: 1.2 } }
  };

  return (
    <div 
      ref={sectionRef} 
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ fontFamily: 'Rajdhani, sans-serif' }}
    >
      {/* Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Rajdhani:wght@500&display=swap" 
        rel="stylesheet" 
      />

      {/* Background */}
      <motion.img
        src={bgImg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 rotate-90"
        style={{ scale: scaleParallax }}
      />

      {/* Neon Glow Sticker */}
      <motion.div 
        className="absolute top-[10%] left-[30%] -translate-x-1/2 z-10 pointer-events-none" 
        style={{ y: springY }}
        variants={slideInFromBottom}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img
          src={sticker1}
          alt="glow sticker"
          className="w-[700px]"
          animate={{
            filter: [
              "drop-shadow(0 0 8px #FFFF33)",
              "drop-shadow(0 0 12px #FFFF33)",
              "drop-shadow(0 0 6px #FFFF33)",
              "drop-shadow(0 0 10px #FFFF33)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Chrome Splash */}
      <motion.img
        src={chromeSplash}
        alt="splash"
        className="absolute top-[25%] left-[30%] -translate-x-1/2 rotate-90 w-[700px] z-20"
        variants={blurZoomOut}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          animation: isInView ? "scale 10s infinite" : "none",
          animationDelay: "1.2s"
        }}
      />

      {/* Foreground Model */}
      <motion.img
        src={modelImg}
        alt="model"
        className="absolute bottom-0 left-[37%] -translate-x-1/2 w-[460px] z-40"
        variants={characterBlur}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      />

      {/* Stickers and Cursor */}
      <motion.img 
        src={sticker2} 
        alt="sticker2" 
        className="absolute bottom-[0%] left-[35%] w-60 z-30" 
        variants={textSlideLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1 }}
      />
      
      <motion.img 
        src={sticker3} 
        alt="sticker3" 
        className="absolute bottom-[37.5%] right-[53%] z-40 w-80 rotate-90" 
        style={{ rotate: "90deg" }} 
        animate={isInView ? { x: [0, -7, 18, 0] } : {}}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      
      <motion.img 
        src={chromeCursor} 
        className="absolute bottom-[40%] left-[52%] z-50 w-20" 
        animate={isInView ? { y: [0, -10, 0], rotate: [0, 10, -10, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      
      <motion.img 
        src={topLeftSticker} 
        className="absolute top-4 left-0 z-50" 
        variants={slideInFromLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          animation: isInView ? "slideLeft 5s infinite ease-in" : "none",
          animationDelay: "1s"
        }}
      />
      
      <motion.img 
        src={topRightSticker} 
        className="absolute top-2 right-4 z-50 w-40" 
        variants={slideInFromTop}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      {/* Globe and Stickers */}
      <motion.img 
        src={globe} 
        className="absolute bottom-44 -right-9 z-20 w-96" 
        variants={globeZoomBlur}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          animation: isInView ? "globeFloat 6s infinite" : "none",
          animationDelay: "1.2s"
        }}
      />
      
      <motion.img 
        src={globeSticker1} 
        className="absolute bottom-96 right-44 z-30 w-16" 
        variants={slideDownFromTop}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          animation: isInView ? "float1 5s infinite" : "none",
          animationDelay: "1s"
        }}
      />
      
      <motion.img 
        src={globeSticker2} 
        className="absolute bottom-48 right-4 z-30 w-44" 
        variants={slideInFromRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          animation: isInView ? "float2 5s infinite" : "none",
          animationDelay: "1s"
        }}
      />

      {/* Top Right Name */}
      <div className="absolute top-72 right-16 z-[70] text-white text-right" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        <motion.h1 
          className="text-9xl font-bold"
          variants={textSlideRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          BINIT
        </motion.h1>
        <motion.h2 
          className="text-4xl mr-10 font-semibold"
          variants={textSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          GHOSH
        </motion.h2>
      </div>

      {/* Left Side Text Content */}
      <div className="absolute top-[55%] left-[5%] z-[60] text-white w-[600px]">
        <motion.h2 
          className="text-6xl font-bold"
          variants={textSlideLeft}
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Education
        </motion.h2>
        <motion.p 
          className="text-2xl mt-2 font-bold  ml-10"
          variants={contentSlide}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          BCA (2022–2025) from TiiT
        </motion.p>
        <motion.p 
          className="text-2xl font-bold ml-10 "
          variants={contentSlide}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
        >
          10+2 from Thakurnagar High School
        </motion.p>
        <motion.p 
          className="text-2xl font-bold ml-10 "
          variants={contentSlide}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          10 from Gaighata High School
        </motion.p>

        <motion.h2 
          className="text-7xl font-bold mt-12"
          variants={textSlideLeft}
          initial="hidden"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          Skills & Tools
        </motion.h2>
        <div className="ml-10 ">
          <motion.ul 
            className="text-2xl font-bold mt-2 text-black"
            variants={skillsLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <li>Video Editing</li>
            <li>Photo Editing</li>
            <li>Web Development</li>
          </motion.ul>
          <motion.ul 
            className="absolute top-[290px] left-72 font-bold text-2xl text-black"
            variants={skillsRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <li>Graphics Designing</li>
            <li>Colour Grading</li>
            <li>UI-UX Designing</li>
          </motion.ul>
        </div>
      </div>

      {/* Bottom Right Bio */}
      <motion.div
        className="absolute bottom-11 right-3 z-[60] w-[620px] text-white text-2xl font-bold"
        variants={bioAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Hello this is Binit Ghosh, I was born on 8th Feb, 2004. I am a designer
        in prime time, a video and photo editor, and a web developer.
      </motion.div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
          75% { transform: scale(0.90); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          25% { transform: translateX(5px) rotate(19deg); }
          50% { transform: translateX(-5px) rotate(-90deg); }
          75% { transform: translateX(0px) rotate(0deg); }
        }
        
        @keyframes slideLeft {
          0%, 100% { transform: translateX(-10px); }
          25% { transform: translateX(0px); }
          50% { transform: translateX(-50px); }
          75% { transform: translateX(-10px); }
        }
        
        @keyframes globeFloat {
          0%, 100% { transform: scale(1) rotate(0deg); }
          33% { transform: scale(1.03) rotate(3deg); }
          66% { transform: scale(0.97) rotate(-3deg); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(4px) translateY(-4px); }
          50% { transform: translateX(-4px) translateY(4px); }
          75% { transform: translateX(0px) translateY(0px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(-4px) translateY(4px); }
          50% { transform: translateX(4px) translateY(-4px); }
          75% { transform: translateX(0px) translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default About;