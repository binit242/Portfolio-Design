import React from "react";
import CurvedLoop from './CurvedLoop';
import ASCIIText from './ASCIIText';
import Dock from './Dock';

import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaGoogle, FaGithub } from 'react-icons/fa';

const items = [
  { icon: <FaFacebookF size={18} />, label: 'Facebook', onClick: () => window.open('https://www.facebook.com/kutu.ghosh.980') },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', onClick: () => window.open('https://wa.me/7076494138', 'Hey i would like to work with you') },
  { icon: <FaInstagram size={18} />, label: 'Instagram', onClick: () => window.open('https://www.instagram.com/p/DCMP6LEy1xl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D') },
  { icon: <FaLinkedinIn size={18} />, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/binit-ghosh/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app') },
  { icon: <FaGoogle size={18} />, label: 'Gmail', onClick: () => window.open('mailto:www.binit108walla@gmail.com?subject=Hey%20I%20liked%20your%20work%20and%20am%20willing%20to%20work%20with%20you', '_self') },
  { icon: <FaGithub size={18} />, label: 'GitHub', onClick: () => window.open('https://github.com/binit242') },
];




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


  <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
        </div>
      </div>
    </div>
  );
};

export default Contact;