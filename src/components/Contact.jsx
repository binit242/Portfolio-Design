import React from "react";
import CurvedLoop from './CurvedLoop';
import ASCIIText from './ASCIIText';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url('/istockphoto-1421421842-2048x2048 copy 2.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="relative h-screen">
        <CurvedLoop 
          marqueeText="binitghosh326@gmail.com ✦ 7076494138 ✦ @binit._.ghosh ✦"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
          className="custom-text-style transform -translate-y-96 sca"
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '8%',  // Moved up slightly
          left: 0, 
          width: '100%', 
          height: '300px',  // Increased height
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <ASCIIText
            text='THANK YOU'
            enableWaves={true}
            asciiFontSize={5}  // Extreme size
            className="origin-bottom"
            style={{
              fontSize: '25rem',  // Massive font size
              lineHeight: '1',
              textShadow: '0 0 50px rgba(255,255,255,1)',
              transform: 'scale(5)',
              whiteSpace: 'nowrap',
              marginBottom: '-10%'  // Pulls text downward
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;