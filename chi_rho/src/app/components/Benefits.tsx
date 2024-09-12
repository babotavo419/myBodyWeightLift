import React from 'react'
import { IconType } from 'react-icons'
import { FaDumbbell, FaTshirt, FaLaptop } from 'react-icons/fa'

interface BenefitTileProps {
  icon: React.ReactElement<IconType>;
  title: string;
  description: string;
}

const BenefitTile: React.FC<BenefitTileProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 rounded-lg shadow-md mt-8 mb-8">
    <div className="text-6xl text-white mt-8 mb-8">{icon}</div>
    <h3 className="text-2xl mb-4 text-white font-semibold">{title}</h3>
    <p className="text-center mb-20 text-white">{description}</p>
  </div>
)

export default function Benefits() {
  return (
    <section className="py-12 justify-center px-5 mt-8 mb-8">
      <h2 className="text-3xl font-bold text-center text-white mt-8 mb-8">Why Choose Chi-rho Power and Strength</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8">
        <BenefitTile 
          icon={<FaDumbbell />}
          title="Premium Equipment"
          description="High-quality leather and neoprene strength equipment for optimal performance"
        />
        <BenefitTile 
          icon={<FaTshirt />}
          title="Stylish Apparel"
          description="Trendy and comfortable clothing line designed for both gym and everyday wear"
        />
        <BenefitTile 
          icon={<FaLaptop />}
          title="Expert Guidance"
          description="Customized training templates and online coaching to help you reach your goals"
        />
      </div>
    </section>
  )
}
