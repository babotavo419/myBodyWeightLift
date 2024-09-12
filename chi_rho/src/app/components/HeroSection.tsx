'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/assets/images/cathy-mu-UWFjqxYWAmA-unsplash.jpg' },
  { src: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg' },
  { src: '/assets/images/joshua-hoehne-0F4duBPWlCw-unsplash.jpg' },
];

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
            <div className="overlay absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-8"
                 style={{ background: 'linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(0,0,0,5) 100%)' }}>
              <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                <div className="tracking-tighter mt-6 mb-6 text-white">
                  <h2 className="font-bold text-left text-3xl md:text-4xl lg:text-5xl mb-4">
                    Welcome to Chi-Rho Power and Strength
                  </h2>
                  <p className="mt-3 text-xl md:text-2xl text-left text-gray-300">Fortify My Life</p>
                  <p className='py-8 text-left text-base md:text-xl lg:text-2xl'>
                    Where the journey of preparation meets the commitment to excellence and the courage
                    to respond to life's challenges. We are more than just a lifestyle brand; we are a
                    community committed to fostering strength in every aspect of life.
                  </p>
                </div>
              </div>
              <div className=" md:w-1/2 flex justify-center md:justify-end items-center">
                <div className="relative">
                  <Image
                    src={logo}
                    alt="Logo"
                    height='1000'
                    width='1000'
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;