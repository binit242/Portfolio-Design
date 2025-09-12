import React from 'react';
import ScrollVelo from './ScrollVelo';
import Folder from './Folder';
import InfiniteMenu from './InfiniteMenu';

const velocity = 33;

const items = [
  {
    image: 'banner creative 21.23.png',
    link: 'https://drive.google.com/file/d/15BHT2xobuluhEBfNO1hC5TUnxBlHTx4z/view?usp=sharing',
    title: 'PSD 1',
    description: 'A flyer for a Business Webinar!'
  },
  {
    image: 'banner med.png',
    link: 'https://drive.google.com/file/d/1Oy67b-kYbXvLsYiBuWEc5XNRNWmYORLu/view?usp=sharing',
    title: 'PSD 2',
    description: 'A flyer for a Fashion Brand!'
  },
  {
    image: 'banner medical.png',
    link: 'https://drive.google.com/file/d/1QQVtcVoRU4LF-Uo6dwRxN6DpA5tAH5Vd/view?usp=sharing',
    title: 'PSD 3',
    description: 'A flyer for a Dental Clinic!'
  },
  {
    image: 'creative fashion (1).png',
    link: 'https://drive.google.com/file/d/1SOxhjTS7OEABaSG1bmHocaVhAqQemNBs/view?usp=sharing',
    title: 'PSD 4',
    description: 'A Banner for a Music Personal!'
  },
  {
    image: 'creative fashion.png',
    link: 'https://drive.google.com/file/d/1nPpT01oaZIea19VMdAwU-zkuQ820z3ro/view?usp=sharing',
    title: 'PSD 5',
    description: 'A Banner for a Fashion Brand!'
  },
  {
    image: 'event launch banner.avif',
    link: 'https://drive.google.com/file/d/1z9y3BywUI94qLkqqC10ATaqY6ULACAQ5/view?usp=sharing',
    title: 'PSD 6',
    description: 'A Banner for a Casual Event!'
  }
];

export default function Work() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/istockphoto-1421421842-2048x2048.webp')" }}
      >
        <ScrollVelo
          texts={["My Works |", "Check them out!"]}
          velocity={velocity}
          className="custom-scroll-text -mt-2.5"
        />
      </div>

      {/* Mobile/Tab Layout (shown on small screens) */}
      <section className="relative pt-12 pb-24 mt-40 bento-section block lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Folder Items with improved text spacing */}
            <div className="h-60 flex flex-col items-center justify-start pt-4">
              <div className="mb-3">
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { src: "motion-juice.mp4", type: "video", title: "Juice Motion Banner AD" },
                    { src: "motion-coca-cola.mp4", type: "video", title: "Coca Cola Motion Banner AD" },
                    { src: "motion-facewash.mp4", type: "video", title: "Facewash Motion Banner AD" }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Motion Banners</p>
            </div>

            <div className="h-60 flex flex-col items-center justify-start pt-4">
              <div className="mb-3">
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { src: "mr beast mockup.mp4", type: "video", title: "Mr Beast Podcast Short Conversion" },
                    { src: "kobe advise mockup.mp4", type: "video", title: "Kobe Podcast Short Conversion" },
                    { src: "ronaldo talkhead.mp4", type: "video", title: "Ronaldo Talkhead Short Conversion" }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Short Conversion</p>
            </div>

            <div className="h-60 flex flex-col items-center justify-start pt-4">
              <div className="mb-3">
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { src: "bmw2.mp4", type: "video", title: "BMW Car Edit (GTA V)" },
                    { src: "1969 DODGE CHARGER   THE HELLCAT X WHITE TEE  GTA V - GTA GUY (1080p, h264).mp4", type: "video", title: "1969 DODGE CHARGER - THE HELLCAT X WHITE TEE (GTA V)" },
                    { src: "Audi R8  collide - GTA GUY (1080p, h264).mp4", type: "video", title: "Audi R8 Collide (GTA V)" }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Car Edits</p>
            </div>

            <div className="h-60 flex flex-col items-center justify-start pt-4">
              <div className="mb-3">
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { src: "editor showreel 2023.mp4", type: "video", title: "Editor Showreel 2023" },
                    { src: "podcast showreel 2024.mp4", type: "video", title: "Podcast Showreel 2024" },
                    { src: "Video Editing Showreel  Portfolio - abdystudio (1080p, h264)_1.mp4", type: "video", title: "Video Editing Showreel 2025" }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Showreels</p>
            </div>

            <div className="h-60 flex flex-col items-center justify-start pt-4">
              <div className="mb-3">
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { src: "Neon thumbnail bg-13411156.jpg", type: "image", title: "Valorant Neon Thumbnail" },
                    { src: "VALORANT THUMBNAIL.jpg", type: "image", title: "Valorant neon Thumbnail 3" },
                    { src: "neonsss copy.jpg", type: "image", title: "Valorant Neon Thumbnail 2" }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Gaming Thumbnails</p>
            </div>

            <div className="h-60 flex flex-col items-center justify-start pt-4">
              <div className="mb-3">
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { src: "valorant montage 1.mp4", type: "video", title: "Valorant Montage 1 kendrick lamar" },
                    { src: "𝙂𝙖𝙩𝙖 𝙊𝙣𝙡𝙮 🤍 - VALORANT [Edit_Montage] - 7Tech (1080p, h264).mp4", type: "video", title: "Gata Only Valorant Edit Montage 2" },
                    { src: "Levitating-Valorant edit  GTA GUY - GTA GUY (1080p, h264).mp4", type: "video", title: "Levitating Valorant Edit Montage 3" }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Gaming Montages</p>
            </div>
          </div>

          {/* Large Box */}
          <div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center ring-1 ring-white/5">
            <InfiniteMenu items={items} />
          </div>

          {/* Text below the large box */}
          <p className="text-white text-center mt-10 text-2xl font-bold">
            Hover your fingers around
          </p>
        </div>
      </section>

      {/* PC/Laptop Layout (shown on large screens) */}
      <section className="relative pt-12 pb-24 mt-40 bento-section hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Item 1 (Top Left) */}
            <div className="lg:col-start-1 lg:row-start-1 h-60 flex flex-col items-center justify-center">
              <div style={{ 
                height: '120px', 
                position: 'relative',
                paddingTop: '57px'
              }}>
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { 
                      src: "motion-juice.mp4", 
                      type: "video", 
                      title: "Juice Motion Banner AD" 
                    },
                    { 
                      src: "motion-coca-cola.mp4", 
                      type: "video", 
                      title: "Coca Cola Motion Banner AD" 
                    },
                    { 
                      src: "motion-facewash.mp4", 
                      type: "video", 
                      title: "Facewash Motion Banner AD" 
                    }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Motion Banners</p>
            </div>

            {/* Item 2 (Mid Left) */}
            <div className="lg:col-start-1 lg:row-start-2 h-60 flex flex-col items-center justify-center">
              <div style={{ 
                height: '120px', 
                position: 'relative',
                paddingTop: '50px'
              }}>
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { 
                      src: "mr beast mockup.mp4", 
                      type: "video", 
                      title: "Mr beast podcast short conversion" 
                    },
                    { 
                      src: "kobe advise mockup.mp4", 
                      type: "video", 
                      title: "Kobe Podcast short conversion" 
                    },
                    { 
                      src: "ronaldo talkhead.mp4", 
                      type: "video", 
                      title: "Ronaldo Talkhead Short Conversion" 
                    }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Short Conversion</p>
            </div>
            
            {/* Item 3 (Bottom Left) */}
            <div className="lg:col-start-1 lg:row-start-3 h-60 flex flex-col items-center justify-center">
              <div style={{ 
                height: '120px', 
                position: 'relative',
                paddingTop: '50px'
              }}>
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { 
                      src: "bmw2.mp4", 
                      type: "video", 
                      title: "BMW Car Edit (GTA V)" 
                    },
                    { 
                      src: "1969 DODGE CHARGER   THE HELLCAT X WHITE TEE  GTA V - GTA GUY (1080p, h264).mp4", 
                      type: "video", 
                      title: "1969 DODGE CHARGER - THE HELLCAT X WHITE TEE (GTA V)" 
                    },
                    { 
                      src: "Audi R8  collide - GTA GUY (1080p, h264).mp4", 
                      type: "video", 
                      title: "Audi R8 Collide (GTA V)" 
                    }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Car Edits</p>
            </div>

            {/* Item 4 (Top Mid-Left) */}
            <div className="lg:col-start-2 lg:row-start-1 h-60 flex flex-col items-center justify-center">
              <div style={{ 
                height: '120px', 
                position: 'relative',
                paddingTop: '50px'
              }}>
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { 
                      src: "editor showreel 2023.mp4", 
                      type: "video", 
                      title: "Editor Showreel 2023" 
                    },
                    { 
                      src: "podcast showreel 2024.mp4", 
                      type: "video", 
                      title: "Podcast Showreel 2024" 
                    },
                    { 
                      src: "Video Editing Showreel  Portfolio - abdystudio (1080p, h264)_1.mp4", 
                      type: "video", 
                      title: "Video Editing Showreel 2025" 
                    }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Showreels</p>
            </div>

            {/* Item 5 (Top Mid-Right) */}
            <div className="lg:col-start-3 lg:row-start-1 h-60 flex flex-col items-center justify-center">
              <div style={{ 
                height: '120px', 
                position: 'relative',
                paddingTop: '50px'
              }}>
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { 
                      src: "Neon thumbnail bg-13411156.jpg", 
                      type: "image", 
                      title: "Valorant Neon Thumbnail" 
                    },
                    { 
                      src: "VALORANT THUMBNAIL.jpg", 
                      type: "image", 
                      title: "Valorant neon Thumbnail 3" 
                    },
                    { 
                      src: "neonsss copy.jpg", 
                      type: "image", 
                      title: "Valorant Neon Thumbnail 2" 
                    }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Gaming Thumbnails</p>
            </div>

            {/* Item 6 (Top Right) */}
            <div className="lg:col-start-4 lg:row-start-1 h-60 flex flex-col items-center justify-center">
              <div style={{ 
                height: '120px', 
                position: 'relative',
                paddingTop: '50px'
              }}>
                <Folder
                  size={2}
                  color="#170b00"
                  className="custom-folder"
                  thumbnails={[
                    { 
                      src: "valorant montage 1.mp4", 
                      type: "video", 
                      title: "Valorant Montage 1 kendrick lamar" 
                    },
                    { 
                      src: "𝙂𝙖𝙩𝙖 𝙊𝙣𝙡𝙮 🤍 - VALORANT [Edit_Montage] - 7Tech (1080p, h264).mp4", 
                      type: "video", 
                      title: "Gata Only Valorant Edit Montage 2" 
                    },
                    { 
                      src: "Levitating-Valorant edit  GTA GUY - GTA GUY (1080p, h264).mp4", 
                      type: "video", 
                      title: "Levitating Valorant Edit Montage 3" 
                    }
                  ]}
                />
              </div>
              <p className="text-white text-center text-lg font-semibold mt-14">Gaming Montages</p>
            </div>
            
            {/* Item 7 (Large Box) - Now correctly spans 2 rows and 3 columns */}
            <div className="lg:col-start-2 lg:row-start-2 lg:col-span-3 lg:row-span-2 mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center ring-1 ring-white/5">
              <InfiniteMenu items={items} />
            </div>

          </div>
          
          {/* Text below the large box - Increased top margin for PC only */}
          <p className="text-white text-center mt-16 ml-56 text-2xl font-bold lg:mt-24">
            Hover your fingers around
          </p>
        </div>
      </section>
    </div>
  );
}