import React from 'react'
import Image from 'next/image'


export default function MainSection() {
  return (
    <section className="py-16 justify-center px-5 mt-8 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between px-5 gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="tracking-tighter mt-6 mb-6 text-white sm:text-lg lg:text-xl">
            <h2 className="font-bold text-center text-lg sm:text-xl lg:text-2xl mb-4">
              Welcome to Chi Rho Power and Strength
            </h2>
            <p className="mt-3 text-center dark:text-gray-300">Fortify My Life</p>
            <p className='py-8 text-center'>
              Where the journey of preparation meets the commitment to excellence and the courage
              to respond to life's challenges. We are more than just a lifestyle brand; we are a
              community committed to fostering strength in every aspect of life.
            </p>
          </div>
        </div>
        <div className='w-1/3'>
          <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-xl'>
            <Image
              src='/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png'
              alt="logo"
              width={1920}
              height={1080}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
