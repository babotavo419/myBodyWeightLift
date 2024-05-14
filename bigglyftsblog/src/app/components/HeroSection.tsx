'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the image paths directly. No need to import as modules.
const images = [
    { src: '/assets/images/cathy-mu-UWFjqxYWAmA-unsplash.jpg' },
    { src: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg' },
    { src: '/assets/images/joshua-hoehne-0F4duBPWlCw-unsplash.jpg' },
];

// Logo is also a direct path reference.
const logo = '/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png';

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-carousel relative w-full h-screen overflow-hidden">
  {images.map((imageData, index) => (
    <div key={index} className={`transition-opacity duration-9000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} absolute inset-0`}>
      <Image
        src={imageData.src}
        alt={`Display Image ${index + 1}`}
        layout='fill'
        objectFit='cover'
        quality={75}
      />
      {index === currentImageIndex && (
        <div className="overlay absolute inset-0 flex items-center justify-center"
             style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(0,0,0,4) 100%)' }}>
          <Image
            src={logo}
            alt="Logo"
            layout='fill' 
            objectFit='contain' 
          />
        </div>
      )}
    </div>
  ))}
</div>

  );
};

export default HeroCarousel;

