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

      {/* Bento section container */}
      <section className="relative pt-12 pb-24 mt-40 bento-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6">
            {/* Folder Items */}
            <div className="h-60 flex items-center justify-center">
              <Folder
                size={2}
                color="#170b00"
                className="custom-folder"
                label="Motion Banners"
                thumbnails={[
                  { src: "motion-juice.mp4", type: "video", title: "Juice Motion Banner AD" },
                  { src: "motion-coca-cola.mp4", type: "video", title: "Coca Cola Motion Banner AD" },
                  { src: "motion-facewash.mp4", type: "video", title: "Facewash Motion Banner AD" }
                ]}
              />
            </div>

            <div className="h-60 flex items-center justify-center">
              <Folder
                size={2}
                color="#170b00"
                className="custom-folder"
                label="Short Conversion"
                thumbnails={[
                  { src: "mr beast mockup.mp4", type: "video", title: "Mr Beast Podcast Short Conversion" },
                  { src: "kobe advise mockup.mp4", type: "video", title: "Kobe Podcast Short Conversion" },
                  { src: "ronaldo talkhead.mp4", type: "video", title: "Ronaldo Talkhead Short Conversion" }
                ]}
              />
            </div>

            <div className="h-60 flex items-center justify-center">
              <Folder
                size={2}
                color="#170b00"
                className="custom-folder"
                label="Car Edits"
                thumbnails={[
                  { src: "bmw2.mp4", type: "video", title: "BMW Car Edit (GTA V)" },
                  { src: "1969 DODGE CHARGER   THE HELLCAT X WHITE TEE  GTA V - GTA GUY (1080p, h264).mp4", type: "video", title: "1969 DODGE CHARGER - THE HELLCAT X WHITE TEE (GTA V)" },
                  { src: "Audi R8  collide - GTA GUY (1080p, h264).mp4", type: "video", title: "Audi R8 Collide (GTA V)" }
                ]}
              />
            </div>

            <div className="h-60 flex items-center justify-center">
              <Folder
                size={2}
                color="#170b00"
                className="custom-folder"
                label="Showreels"
                thumbnails={[
                  { src: "editor showreel 2023.mp4", type: "video", title: "Editor Showreel 2023" },
                  { src: "podcast showreel 2024.mp4", type: "video", title: "Podcast Showreel 2024" },
                  { src: "Video Editing Showreel  Portfolio - abdystudio (1080p, h264)_1.mp4", type: "video", title: "Video Editing Showreel 2025" }
                ]}
              />
            </div>

            <div className="h-60 flex items-center justify-center">
              <Folder
                size={2}
                color="#170b00"
                className="custom-folder"
                label="Gaming Thumbnails"
                thumbnails={[
                  { src: "Neon thumbnail bg-13411156.jpg", type: "image", title: "Valorant Neon Thumbnail" },
                  { src: "VALORANT THUMBNAIL.jpg", type: "image", title: "Valorant neon Thumbnail 3" },
                  { src: "neonsss copy.jpg", type: "image", title: "Valorant Neon Thumbnail 2" }
                ]}
              />
            </div>

            <div className="h-60 flex items-center justify-center">
              <Folder
                size={2}
                color="#170b00"
                className="custom-folder"
                label="Gaming Montages"
                thumbnails={[
                  { src: "valorant montage 1.mp4", type: "video", title: "Valorant Montage 1 kendrick lamar" },
                  { src: "𝙂𝙖𝙩𝙖 𝙊𝙣𝙡𝙮 🤍 - VALORANT [Edit_Montage] - 7Tech (1080p, h264).mp4", type: "video", title: "Gata Only Valorant Edit Montage 2" },
                  { src: "Levitating-Valorant edit  GTA GUY - GTA GUY (1080p, h264).mp4", type: "video", title: "Levitating Valorant Edit Montage 3" }
                ]}
              />
            </div>
          </div>

          {/* Large Box */}
          <div className="mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center ring-1 ring-white/5">
            <InfiniteMenu items={items} />
          </div>

          {/* Text below the large box */}
          <p className="text-white text-center mt-6 text-xl font-bold">
            Hover your fingers around
          </p>
        </div>
      </section>
    </div>
  );
}