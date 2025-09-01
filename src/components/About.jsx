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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const scaleParallax = useTransform(scrollY, [0, 500], [1, 1.05]);
  const springY = useSpring(yParallax, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation variants
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

  const characterBlur = {
    hidden: { opacity: 0, filter: "blur(15px)", y: 50 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const globeZoomBlur = {
    hidden: { scale: 0.5, opacity: 0, filter: "blur(8px)" },
    visible: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeOut" } }
  };

  const textSlideRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const textSlideLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
  };

  const textSlideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.4 } }
  };

  const contentSlide = {
    hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut", delay: 0.6 } }
  };

  const skillsAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.8 } }
  };

  const bioAnimation = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut", delay: 1 } }
  };

  return (
    <div 
      ref={sectionRef} 
      className="relative w-full min-h-screen overflow-hidden bg-black"
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
        className={`absolute inset-0 w-full h-full object-cover z-0 ${!isMobile ? 'md:rotate-90' : ''}`}
        style={{ scale: scaleParallax }}
      />

      {/* Mobile Layout */}
      {isMobile ? (
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Header Section */}
          <div className="flex-shrink-0 text-center pt-8 pb-6">
            <motion.div
              className="text-white"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              variants={textSlideRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">BINIT</h1>
              <h2 className="text-xl sm:text-2xl font-semibold mt-1">GHOSH</h2>
            </motion.div>
          </div>

          {/* Content Container */}
          <div className="flex-1 flex flex-col justify-center px-4 space-y-8 pb-20">
            
            {/* Education Section */}
            <motion.div 
              className="bg-black/40 backdrop-blur-[3px] rounded-2xl p-6 text-white border border-white/10"
              variants={textSlideLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-4 text-left"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Education
              </h2>
              <div className="space-y-2">
                <motion.p 
                  className="text-base sm:text-lg font-medium"
                  variants={contentSlide}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  • BCA (2022-2025) from TIT
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg font-medium"
                  variants={contentSlide}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.1 }}
                >
                  • 10+2 from Thakurnagar High School
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg font-medium"
                  variants={contentSlide}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                >
                  • 10 from Gaighata High School
                </motion.p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              className="bg-black/40 backdrop-blur-[3px] rounded-2xl p-6 text-white border border-white/10"
              variants={skillsAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-4 text-left"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Skills & Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-medium">• Video Editing</p>
                  <p className="text-base sm:text-lg font-medium">• Photo Editing</p>
                  <p className="text-base sm:text-lg font-medium">• Web Development</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-medium">• Graphics Designing</p>
                  <p className="text-base sm:text-lg font-medium">• Colour Grading</p>
                  <p className="text-base sm:text-lg font-medium">• UI-UX Designing</p>
                </div>
              </div>
            </motion.div>

          {/* Bio Section */}
<motion.div
  className="absolute -bottom-16 z-50 
             w-[90%] max-w-[600px] mx-auto
             rounded-2xl
             relative overflow-hidden
             shadow-lg"
  variants={bioAnimation}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  {/* Glass background layer */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] border border-white/10"></div>

  {/* Text content (kept sharp) */}
  <div className="relative p-4 text-white">
    <p className="text-base sm:text-lg text-[20px] font-extrabold leading-relaxed text-center">
      Hello this is Binit Ghosh. I was born on 8th Feb, 2004. I am a designer
      in prime time, a video and photo editor, and a web developer.
    </p>
  </div>
</motion.div>


          </div>

          {/* Character Image - Positioned at bottom left */}
          <motion.div 
            className="absolute bottom-0 left-1/4 z-30"
            variants={characterBlur}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src={modelImg}
              alt="model"
              className="w-[330px] sm:w-40 h-auto opacity-100"
            />
          </motion.div>

          {/* Decorative elements for mobile */}
          <motion.img
            src={topRightSticker}
            alt="decorative sticker"
            className="absolute top-4 right-4 w-24 sm:w-20 z-20 opacity-60"
            variants={slideInFromTop}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          
 {/* Neon Glow Sticker - Mobile */}
          <motion.div 
            className="absolute top-[40%] left-32 -translate-x-1/2 -z-10 pointer-events-none"
            style={{ y: springY }}
            variants={slideInFromBottom}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.img
              src={sticker1}
              alt="glow sticker"
              className="w-[400px]"
              animate={isInView ? {
                filter: [
                  "drop-shadow(0 0 8px #FFFF33)",
                  "drop-shadow(0 0 12px #FFFF33)",
                  "drop-shadow(0 0 6px #FFFF33)",
                  "drop-shadow(0 0 10px #FFFF33)"
                ]
              } : {}}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Chrome Splash - Mobile */}
          <motion.img
            src={chromeSplash}
            alt="splash"
            className="absolute top-[55%] left-32 -translate-x-1/2 w-[400px] z-10"
            variants={blurZoomOut}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              animation: isInView ? "scale 10s infinite" : "none",
              animationDelay: "1.2s"
            }}
          />

{/* Chrome Cursor overlay for character */}
<motion.img 
  src={chromeCursor} 
  style={{ scaleX: -1 }}   // <-- flip horizontally
  className="absolute bottom-[33%] left-[65%] w-20 z-40"
  animate={isInView ? { y: [0, -10, 0], rotate: [0, 10, -10, 0] } : {}}
  transition={{ repeat: Infinity, duration: 2 }}
/>


        </div>
      ) : (
        /* Desktop Layout (Enhanced) */
        <>
          {/* Neon Glow Sticker */}
          <motion.div 
            className={`absolute ${isTablet ? "top-[8%] left-[35%]" : "top-[10%] left-[30%]"} -translate-x-1/2 z-10 pointer-events-none`}
            style={{ y: springY }}
            variants={slideInFromBottom}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.img
              src={sticker1}
              alt="glow sticker"
              className={`${isTablet ? "w-[500px]" : "w-[700px]"}`}
              animate={isInView ? {
                filter: [
                  "drop-shadow(0 0 8px #FFFF33)",
                  "drop-shadow(0 0 12px #FFFF33)",
                  "drop-shadow(0 0 6px #FFFF33)",
                  "drop-shadow(0 0 10px #FFFF33)"
                ]
              } : {}}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Chrome Splash */}
          <motion.img
            src={chromeSplash}
            alt="splash"
            className={`absolute ${isTablet ? "top-[20%] left-[35%]" : "top-[25%] left-[30%]"} -translate-x-1/2 md:rotate-90 ${isTablet ? "w-[500px]" : "w-[700px]"} z-20`}
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
            className={`absolute ${isTablet ? "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 w-[350px]" : "bottom-0 left-[37%] -translate-x-1/2 w-[460px]"} z-40`}
            variants={characterBlur}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          />

          {/* Decorative Stickers and Elements */}
          <motion.img 
            src={sticker2} 
            alt="sticker2" 
            className={`absolute ${isTablet ? "bottom-[5%] left-[38%] w-40" : "bottom-[0%] left-[35%] w-60"} z-30`}
            variants={textSlideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1 }}
          />
          
          <motion.img 
            src={sticker3} 
            alt="sticker3" 
            className={`absolute ${isTablet ? "bottom-[35%] right-[55%] w-60" : "bottom-[37.5%] right-[53%] w-80"} z-40`}
            animate={isInView ? { x: [0, -7, 18, 0] } : {}}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          
          <motion.img 
            src={chromeCursor} 
            className={`absolute ${isTablet ? "bottom-[35%] left-[55%] w-16" : "bottom-[40%] left-[52%] w-20"} z-50`}
            animate={isInView ? { y: [0, -10, 0], rotate: [0, 10, -10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          
          <motion.img 
            src={topLeftSticker} 
            className="absolute top-4 left-0 z-50 w-auto"
            variants={slideInFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              animation: isInView ? "slideLeft 5s infinite ease-in-out" : "none",
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

          {/* Globe and Related Stickers */}
          <motion.img 
            src={globe} 
            className={`absolute ${isTablet ? "bottom-32 -right-6 w-64" : "bottom-44 -right-9 w-96"} z-20`}
            variants={globeZoomBlur}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              animation: isInView ? "globeFloat 6s infinite ease-in-out" : "none",
              animationDelay: "1.2s"
            }}
          />
          
          <motion.img 
            src={globeSticker1} 
            className={`absolute ${isTablet ? "bottom-72 right-32 w-12" : "bottom-96 right-44 w-16"} z-30`}
            variants={slideInFromTop}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              animation: isInView ? "float1 5s infinite ease-in-out" : "none",
              animationDelay: "1s"
            }}
          />
          
          <motion.img 
            src={globeSticker2} 
            className={`absolute ${isTablet ? "bottom-40 right-2 w-32" : "bottom-48 right-4 w-44"} z-30`}
            variants={slideInFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              animation: isInView ? "float2 5s infinite ease-in-out" : "none",
              animationDelay: "1s"
            }}
          />

          {/* Name Section - Top Right */}
          <div className={`absolute ${isTablet ? "top-56 right-10" : "top-72 right-16"} z-[70] text-white text-right`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <motion.h1 
              className={`${isTablet ? "text-7xl" : "text-9xl"} font-bold leading-none`}
              variants={textSlideRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              BINIT
            </motion.h1>
            <motion.h2 
              className={`${isTablet ? "text-3xl mr-4" : "text-4xl mr-10"} font-semibold`}
              variants={textSlideUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              GHOSH
            </motion.h2>
          </div>

          {/* Left Side Content */}
          <div className={`absolute ${isTablet ? "top-[50%] left-[5%] w-[500px]" : "top-[55%] left-[5%] w-[600px]"} z-[60] text-white`}>
            {/* Education Section */}
            <motion.h2 
              className={`${isTablet ? "text-5xl" : "text-6xl"} font-bold mb-4`}
              variants={textSlideLeft}
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Education
            </motion.h2>
            
            <div className="ml-10 space-y-1">
              <motion.p 
                className="text-2xl font-bold"
                variants={contentSlide}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                BCA (2022–2025) from TIT
              </motion.p>
              <motion.p 
                className="text-2xl font-bold"
                variants={contentSlide}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.7 }}
              >
                10+2 from Thakurnagar High School
              </motion.p>
              <motion.p 
                className="text-2xl font-bold"
                variants={contentSlide}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.8 }}
              >
                10 from Gaighata High School
              </motion.p>
            </div>

            {/* Skills Section */}
            <motion.h2 
              className={`${isTablet ? "text-6xl mt-10" : "text-7xl mt-12"} font-bold`}
              variants={textSlideLeft}
              initial="hidden"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              Skills & Tools
            </motion.h2>
            
            <div className="ml-10 relative">
              <motion.div 
                className="text-2xl mt-2 font-bold text-black space-y-1"
                variants={skillsAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <p>Video Editing</p>
                <p>Photo Editing</p>
                <p>Web Development</p>
              </motion.div>
              
              <motion.div 
                className={`absolute ${isTablet ? "top-0 left-60" : "top-0 left-72"} font-bold text-2xl text-black space-y-1`}
                variants={skillsAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
              >
                <p>Graphics Designing</p>
                <p>Colour Grading</p>
                <p>UI-UX Designing</p>
              </motion.div>
            </div>
          </div>

          {/* Bio Section - Bottom Right */}
          <motion.div
            className={`absolute ${isTablet ? "bottom-8 right-3 w-[500px] text-xl" : "bottom-11 right-3 w-[620px] text-2xl"} font-bold text-white z-[60] leading-relaxed`}
            variants={bioAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Hello this is Binit Ghosh, I was born on 8th Feb, 2004. I am a designer
            in prime time, a video and photo editor, and a web developer.
          </motion.div>
        </>
      )}

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
          75% { transform: scale(0.90); }
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

        /* Mobile Optimizations */
        @media (max-width: 767px) {
          .min-h-screen {
            min-height: 100vh;
          }
          
          /* Ensure content doesn't overflow */
          body {
            overflow-x: hidden;
          }
          
          /* Smooth scrolling for mobile */
          html {
            scroll-behavior: smooth;
          }
        }

        /* Tablet Optimizations */
        @media (min-width: 768px) and (max-width: 1023px) {
          .min-h-screen {
            min-height: 100vh;
          }
        }

        /* Desktop Optimizations */
        @media (min-width: 1024px) {
          .min-h-screen {
            min-height: 100vh;
          }
        }

        /* Enhanced backdrop blur support */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  );
};

export default About;