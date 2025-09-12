import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/istockphoto-1421421842-2048x2048 copy 3.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <InfiniteVideoGallery />
    </div>
  );
};

const InfiniteVideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isScrolling, setIsScrolling] = useState(true);
  const [columns, setColumns] = useState(4); // Default to 4 columns

  // Use your local videos with relative paths
  useEffect(() => {
    const localVideos = [
      {
        id: 1,
        src: '/GALLERY/Sequence 01.mp4',
        thumbnail: '/GALLERY/19.png',
        title: 'Video 1'
      },
      {
        id: 2,
        src: '/GALLERY/kai cenat.mp4',
        thumbnail: '/GALLERY/17.png',
        title: 'Video 2'
      },
      {
        id: 3,
        src: '/GALLERY/4.mp4',
        thumbnail: '/GALLERY/3.png',
        title: 'Video 3'
      },
      {
        id: 4,
        src: '/GALLERY/Sequence 01.mp4',
        thumbnail: '/GALLERY/19.png',
        title: 'Video 4'
      },
      {
        id: 5,
        src: '/GALLERY/6F4E4CA9E993D3F0AA5738E3640B8383_video_dashinit.mp4',
        thumbnail: '/GALLERY/5.png',
        title: 'Video 5'
      },
      {
        id: 6,
        src: '/GALLERY/7.mp4',
        thumbnail: '/GALLERY/6.png',
        title: 'Video 6'
      },
      {
        id: 7,
        src: '/GALLERY/7E456C8BAD16B6B6E80F8BBE44D5A199_video_dashinit.mp4',
        thumbnail: '/GALLERY/7.png',
        title: 'Video 7'
      },
      {
        id: 8,
        src: '/GALLERY/8.mp4',
        thumbnail: '/GALLERY/8.png',
        title: 'Video 8'
      },
      {
        id: 9,
        src: '/GALLERY/AQMXgT28rwbhOtLjRZhPMZkX_sBGEyPu4yQ3rPmsO809VvsGyUDmR6HHcjnj9Jrf9WrYsc1bZnj1YgXMITJc1Izx.mp4',
        thumbnail: '/GALLERY/9.png',
        title: 'Video 9'
      },
      {
        id: 10,
        src: '/GALLERY/AQOJdMdtUW518kD1ic0jWi3jP-MbjqaeBWTUoIa2cSa7BDWq8eb08vsk50SqLuaey20b6HzRjR9fCRG-gGAFA8DP.mp4',
        thumbnail: '/GALLERY/10.png',
        title: 'Video 10'
      },
      {
        id: 11,
        src: '/GALLERY/AQPN3kCB7S07Z6JK5kmllI15ul4lbWy4oTGYe5S0OkrfW9S2nRRo_oI0SFr5Ncp7-9lsigjWRJgN-Ow227zvH_Wg.mp4',
        thumbnail: '/GALLERY/11.png',
        title: 'Video 11'
      },
      {
        id: 12,
        src: '/GALLERY/BC401F21A282E19BE1ABA7F1A655F59C_video_dashinit.mp4',
        thumbnail: '/GALLERY/12.png',
        title: 'Video 12'
      },
      {
        id: 13,
        src: '/GALLERY/Comp 1_1.mp4',
        thumbnail: '/GALLERY/13.png',
        title: 'Video 13'
      },
      {
        id: 14,
        src: '/GALLERY/F843C18776CD618C8B03D161CA4321A8_video_dashinit.mp4',
        thumbnail: '/GALLERY/14.png',
        title: 'Video 14'
      },
      {
        id: 15,
        src: '/GALLERY/hashtag.mp4',
        thumbnail: '/GALLERY/15.png',
        title: 'Video 15'
      },
      {
        id: 16,
        src: '/GALLERY/hype boy#NewJeans #뉴진스 #HANNI #하니.mp4',
        thumbnail: '/GALLERY/16.png',
        title: 'Video 16'
      },
      {
        id: 17,
        src: '/GALLERY/2.1.mp4',
        thumbnail: '/GALLERY/2.png',
        title: 'Video 17'
      },
      {
        id: 18,
        src: '/GALLERY/Lisa ver. .#kpop #kpopdance #kpopedit #edit #editing #editkpop #lisa #lisablackpink #lisamanoban #lisaedit #edit #blackpink #blackpinklisa #fy #ilovzy #wallpaper #wallpapers.mp4',
        thumbnail: '/GALLERY/18.png',
        title: 'Video 18'
      },
      {
        id: 19,
        src: '/GALLERY/6.mp4',
        thumbnail: '/GALLERY/4.png',
        title: 'Video 19'
      },
      {
        id: 20,
       src: '/GALLERY/1.1.mp4',
        thumbnail: '/GALLERY/1.png',
        title: 'Video 20'
      }
    ];
    setVideos(localVideos);
  }, []);

  // Handle responsive column count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(2); // 2 columns on mobile
      } else if (window.innerWidth < 768) {
        setColumns(3); // 3 columns on tablet
      } else {
        setColumns(4); // 4 columns on desktop
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVideoClick = (video) => {
    setIsScrolling(false);
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsScrolling(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Top gradient - improved with more opacity */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
      
      {/* Bottom gradient - improved with more opacity */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

      {/* Video gallery */}
      <div className="h-full overflow-hidden py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 px-3 md:px-4 h-full">
          {/* Create columns based on screen size */}
          {Array.from({ length: columns }, (_, colIndex) => (
            <VideoColumn 
              key={colIndex}
              columnIndex={colIndex}
              videos={videos}
              isScrolling={isScrolling}
              setIsScrolling={setIsScrolling}
              onClick={handleVideoClick}
            />
          ))}
        </div>
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeModal} />
      )}
    </div>
  );
};

// Video Column Component with alternating directions
const VideoColumn = ({ columnIndex, videos, isScrolling, setIsScrolling, onClick }) => {
  const columnRef = useRef(null);
  const scrollDirection = columnIndex % 2 === 0 ? 'up' : 'down';

  // Handle infinite scroll animation for each column
  useEffect(() => {
    if (!columnRef.current || !isScrolling) return;

    const column = columnRef.current;
    let animationId;
    let scrollPosition = scrollDirection === 'down' ? 0 : column.scrollHeight / 2;
    const scrollSpeed = 0.8;

    const animateScroll = () => {
      if (isScrolling) {
        if (scrollDirection === 'down') {
          scrollPosition += scrollSpeed;
          if (scrollPosition >= column.scrollHeight / 2) {
            scrollPosition = 0;
          }
        } else {
          scrollPosition -= scrollSpeed;
          if (scrollPosition <= 0) {
            scrollPosition = column.scrollHeight / 2;
          }
        }
        
        column.scrollTop = scrollPosition;
        animationId = requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isScrolling, scrollDirection]);

  // Pause scrolling when hovering over column
  const handleMouseEnter = () => {
    setIsScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsScrolling(true);
  };

  return (
    <div 
      ref={columnRef}
      className="h-full overflow-hidden space-y-3 md:space-y-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* First set of videos */}
      {videos.map((video) => (
        <VideoItem 
          key={`first-${video.id}-col-${columnIndex}`} 
          video={video} 
          onClick={onClick} 
        />
      ))}
      {/* Duplicate for seamless looping */}
      {videos.map((video) => (
        <VideoItem 
          key={`second-${video.id}-col-${columnIndex}`} 
          video={video} 
          onClick={onClick} 
        />
      ))}
    </div>
  );
};

// Video Item Component
const VideoItem = ({ video, onClick }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Handle video hover for preview
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div
      className="relative aspect-[9/16] cursor-pointer bg-gray-700 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl md:hover:shadow-2xl hover:z-10"
      onClick={() => onClick(video)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        preload="metadata"
        poster={video.thumbnail}
      >
        <source src={video.src} type="video/mp4" />
      </video>
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
        <div className="bg-black bg-opacity-50 rounded-full p-2 md:p-3">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
        </div>
      </div>

      {/* Video title */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 md:p-3">
        <p className="text-white text-xs md:text-sm font-medium truncate">{video.title}</p>
      </div>
    </div>
  );
};

// Video Modal Component
const VideoModal = ({ video, onClose }) => {
  const videoRef = useRef(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute -top-10 md:-top-12 right-0 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          onClick={onClose}
          aria-label="Close video"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full max-h-[70vh] md:max-h-[80vh] object-contain"
            controls
            autoPlay
            poster={video.thumbnail}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-3 md:mt-4 text-white">
          <h3 className="text-lg md:text-xl font-bold">{video.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;