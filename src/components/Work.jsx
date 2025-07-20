import ScrollVelo from './ScrollVelo';
import Folder from './Folder'
import InfiniteMenu from './InfiniteMenu'

const velocity = 33;

const items = [
  {
    image: 'banner creative 21.23.png',
    link: 'https://drive.google.com/file/d/15BHT2xobuluhEBfNO1hC5TUnxBlHTx4z/view?usp=sharing',
    title: 'PSD 1',
    description: 'A flyer for a Buisness Webinar !'
  },
  {
    image: 'banner med.png',
    link: 'https://drive.google.com/file/d/1Oy67b-kYbXvLsYiBuWEc5XNRNWmYORLu/view?usp=sharing',
    title: 'PSD 2',
    description: 'A lyer for a Fashion Brand  !'
  },
  {
    image: 'banner medical.png',
    link: 'https://drive.google.com/file/d/1QQVtcVoRU4LF-Uo6dwRxN6DpA5tAH5Vd/view?usp=sharing',
    title: 'PSD 3',
    description: 'A flyer for a Dental Clinic !'
  },
  {
    image: 'creative fashion (1).png',
    link: 'https://drive.google.com/file/d/1SOxhjTS7OEABaSG1bmHocaVhAqQemNBs/view?usp=sharing',
    title: 'PSD 4',
    description: 'A Banner for a Music Personal !'
  },
   {
    image: 'creative fashion.png',
    link: 'https://drive.google.com/file/d/1nPpT01oaZIea19VMdAwU-zkuQ820z3ro/view?usp=sharing',
    title: 'PSD 5',
    description: 'A Banner for a Fashion Brand !'
  },
   {
    image: 'event launch banner.avif',
    link: 'https://drive.google.com/file/d/1z9y3BywUI94qLkqqC10ATaqY6ULACAQ5/view?usp=sharing',
    title: 'PSD 6',
    description: 'A Banner for a Casual Event !'
  }, {
    image: 'food menu banner.png',
    link: 'https://drive.google.com/file/d/1ayamz4j4Ll-8_3luM7JR_GsAMMgaAVIg/view?usp=sharing',
    title: 'PSD 7',
    description: 'A flyer for a Food Joint !'
  }, {
    image: 'RajLakshmi Daignostics.png',
    link: 'https://drive.google.com/file/d/1CH9IklPtgcGdjET26m5GNMXyxyGXSaJh/view?usp=sharing',
    title: 'PSD 8',
    description: 'A Banner for a Medical Shop !'
  }, {
    image: '7618292 copy.jpg',
    link: 'https://drive.google.com/file/d/1uEBp8mB584f_Yj8lPoMcQHT_s5F3_No3/view?usp=sharing',
    title: 'PSD 9',
    description: 'A Flyer for regional organisation !'
  }, {
    image: '7643369 copy.jpg',
    link: 'https://drive.google.com/file/d/1aYp5AvPaUyR4Zi3Sc3wnj8DBUChQwrXv/view?usp=sharing',
    title: 'PSD 10',
    description: 'A Flyer for GYM !'
  },
  {
    image: 'valorant thumbnail (1).jpg',
    link: 'https://drive.google.com/drive/folders/18VNi9edY3oiyNipfJ79_IkwxdmSEevaE?usp=sharing',
    title: 'PSD 11',
    description: 'A Thumbnail for Valorant !'
  },
  {
    image: 'Pretending to be NEW in Valorant _ Undercover Iron Episode 10.jpg',
    link: 'https://drive.google.com/drive/folders/18VNi9edY3oiyNipfJ79_IkwxdmSEevaE?usp=sharing',
    title: 'PSD 12',
    description: 'A Thumbnail for Valorant stream !'
  },
  {
    image: 'Screenshot 2025-07-17 111404.png',
    link: 'https://drive.google.com/drive/folders/18VNi9edY3oiyNipfJ79_IkwxdmSEevaE?usp=sharing',
    title: 'PSD 13',
    description: 'A Thumbnail for Valorant tutorial !'
  },
  {
    image: 'Screenshot 2025-07-17 111544.png',
    link: 'https://drive.google.com/drive/folders/18VNi9edY3oiyNipfJ79_IkwxdmSEevaE?usp=sharing',
    title: 'PSD 14',
    description: 'A Thumbnail for Valorant gameplay !'
  }
];

export default function Work() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/istockphoto-1421421842-2048x2048.webp')" }}
      >
        <ScrollVelo
          texts={["My Works |", "Check them out !"]}
          velocity={velocity}
          className="custom-scroll-text -mt-2.5"
        />
      </div>

     {/* Bento section container */}
       <section className="relative pt-12 pb-24 mt-40 bento-section">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Item 1 (Top Left) */}
                  <div className="lg:col-start-1 lg:row-start-1  h-60 flex items-center justify-center">
  <div style={{ 
    height: '120px', 
    position: 'relative',
    paddingTop: '57px'  // This will push the content down by 20px
  }}>
   <Folder
  size={2}
  color="#170b00"
  className="custom-folder"
  label="Motion Banners"
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
</div>

                  {/* Item 2 (Mid Left) */}
                  <div className="lg:col-start-1 lg:row-start-2  h-60 flex items-center justify-center">
                      <div style={{ 
    height: '120px', 
    position: 'relative',
    paddingTop: '50px'  // This will push the content down by 20px
  }}>
    <Folder
  size={2}
  color="#170b00"
  className="custom-folder"
  label="Short conversion"
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
                  </div>
                  
                  {/* Item 3 (Bottom Left) */}
                  <div className="lg:col-start-1 lg:row-start-3  h-60 flex items-center justify-center">
                      <div style={{ 
    height: '120px', 
    position: 'relative',
    paddingTop: '50px'  // This will push the content down by 20px
  }}>
   <Folder
  size={2}
  color="#170b00"
  className="custom-folder"
  label="Car Edits"
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
                  </div>

                  {/* Item 4 (Top Mid-Left) */}
                  <div className="lg:col-start-2 lg:row-start-1  h-60 flex items-center justify-center">
                      <div style={{ 
    height: '120px', 
    position: 'relative',
    paddingTop: '50px'  // This will push the content down by 20px
  }}>
   <Folder
  size={2}
  color="#170b00"
  className="custom-folder"
  label="Showreels"
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
                  </div>

                  {/* Item 5 (Top Mid-Right) */}
                  <div className="lg:col-start-3 lg:row-start-1  h-60 flex items-center justify-center">
                      <div style={{ 
    height: '120px', 
    position: 'relative',
    paddingTop: '50px'  // This will push the content down by 20px
  }}>
   <Folder
  size={2}
  color="#170b00"
  className="custom-folder"
  label="Gaming Thumbnails"
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
                  </div>

                  {/* Item 6 (Top Right) */}
                  <div className="lg:col-start-4 lg:row-start-1  h-60 flex items-center justify-center">
                      <div style={{ 
    height: '120px', 
    position: 'relative',
    paddingTop: '50px'  // This will push the content down by 20px
  }}>
   <Folder
  size={2}
  color="#170b00"
  className="custom-folder"
  label="Gaming Montages"
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
                  </div>
                  
                  {/* Item 7 (Large Box) - Now correctly spans 2 rows and 3 columns */}
                  <div className="lg:col-start-2 lg:row-start-2 lg:col-span-3 lg:row-span-2 mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center ring-1 ring-white/5">
                      <InfiniteMenu items={items} />
                  </div>

              </div>
           </div>
        </section>
    </div>
  );
}