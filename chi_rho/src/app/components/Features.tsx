import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faClipboard, faTshirt } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface FeatureItemProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center mt-8 mb-8">
    <div className="w-full mb-4 text-center">
      <FontAwesomeIcon className="text-6xl mt-8 mb-8 text-white" icon={icon} />
    </div>
    <h3 className="text-2xl mb-4 text-white font-semibold">{title}</h3>
    <p className="text-white text-center">{description}</p>
  </div>
)

export default function Features() {
  return (
    <section className="py-16 px-4 justify-center">
      <h2 className="text-3xl font-bold text-center text-white mt-8 mb-8">Our Features</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureItem
          title="Premium Leather Equipment"
          description="Experience the durability and comfort of our high-quality leather strength equipment, designed for optimal performance and longevity."
          icon={faDumbbell}
        />
        <FeatureItem
          title="Customized Training Templates"
          description="Access our library of professionally designed training templates, tailored to various fitness levels and goals."
          icon={faClipboard}
        />
        <FeatureItem
          title="Exclusive Clothing Line"
          description="Look and feel your best with our stylish and functional clothing line, perfect for both intense workouts and casual wear."
          icon={faTshirt}
        />
      </div>
    </section>
  )
}